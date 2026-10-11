import assert from 'node:assert/strict';
import test from 'node:test';
import { renderToStaticMarkup } from 'react-dom/server';
import { LeadResults } from './lead-results';
import type { LeadsState } from './use-leads';

const render = (state: LeadsState) => renderToStaticMarkup(
  <LeadResults state={state} onRetry={() => {}} />,
);

test('loading does not pretend to be an empty result or expose Retry', () => {
  const html = render({ kind: 'loading' });
  assert.match(html, /Loading leads/);
  assert.match(html, /aria-busy="true"/);
  assert.doesNotMatch(html, /No leads returned|Retry loading leads|<table/);
});

test('request failure exposes recovery instead of claiming there are no records', () => {
  const html = render({ kind: 'error', message: 'Could not load leads. Try again.' });
  assert.match(html, /Could not load leads/);
  assert.match(html, /Retry loading leads/);
  assert.doesNotMatch(html, /No leads returned|<table/);
});

test('successful empty request has its own message with no false Retry', () => {
  const html = render({ kind: 'ready', records: [] });
  assert.match(html, /No leads returned by this request/);
  assert.doesNotMatch(html, /Retry loading leads|No leads match|<table/);
});

test('successful request renders semantic headers and escapes record text', () => {
  const html = render({ kind: 'ready', records: [
    { id: 'fictional-1', name: '<script>fictional</script>', status: 'New', valueCents: 0 },
  ] });
  assert.match(html, /1 of 1 leads shown/);
  assert.match(html, /<th scope="col">Name/);
  assert.match(html, /&lt;script&gt;fictional&lt;\/script&gt;/);
  assert.doesNotMatch(html, /<script>|Retry loading leads/);
});
