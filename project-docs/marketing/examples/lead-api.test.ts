import assert from 'node:assert/strict';
import test from 'node:test';
import { loadLeads, parseLeads } from './lead-api';

const lead = { id: 'demo-1', name: 'Example lead', status: 'New', valueCents: 12500 };
function responder(response: Response): typeof fetch {
  return async () => response;
}

test('accepts valid records and a successful empty dataset', () => {
  assert.deepEqual(parseLeads([lead]), [lead]);
  assert.deepEqual(parseLeads([]), []);
});
test('rejects invalid shape, missing fields and duplicate IDs', () => {
  for (const payload of [{ records: [lead] }, [null], [{ id: 'x' }], [lead, lead], [{ ...lead, id: ' ' }]]) {
    assert.throws(() => parseLeads(payload));
  }
});
test('rejects unknown status and unsafe monetary values', () => {
  assert.throws(() => parseLeads([{ ...lead, status: 'Archived' }]));
  for (const valueCents of [-1, 1.5, NaN, Infinity, Number.MAX_SAFE_INTEGER + 1, '100']) {
    assert.throws(() => parseLeads([{ ...lead, valueCents }]));
  }
});
test('passes the abort signal and returns validated records', async () => {
  const signal = new AbortController().signal;
  const request: typeof fetch = async (url, options) => {
    assert.equal(url, '/api/leads');
    assert.equal(options?.signal, signal);
    assert.equal(options?.cache, 'no-store');
    return Response.json([lead]);
  };
  assert.deepEqual(await loadLeads(signal, request), [lead]);
});
test('HTTP failures do not become empty success states', async () => {
  for (const status of [403, 500]) {
    await assert.rejects(loadLeads(new AbortController().signal, responder(new Response('failed', { status }))), new RegExp(`HTTP ${status}`));
  }
});
test('invalid JSON and malformed successful payloads fail', async () => {
  await assert.rejects(loadLeads(new AbortController().signal, responder(new Response('not json'))));
  await assert.rejects(loadLeads(new AbortController().signal, responder(Response.json([{ ...lead, status: 'Unknown' }]))), /Unknown/);
});
test('network and cancellation failures propagate to the caller', async () => {
  const controller = new AbortController();
  controller.abort();
  const request: typeof fetch = async (_url, options) => { options?.signal?.throwIfAborted(); throw new Error('network down'); };
  await assert.rejects(loadLeads(controller.signal, request), { name: 'AbortError' });
  await assert.rejects(loadLeads(new AbortController().signal, request), /network down/);
});
