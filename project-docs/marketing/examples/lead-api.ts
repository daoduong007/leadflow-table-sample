// Standalone teaching example; not the paid kit's source or a shipped backend.
export const statuses = ['New', 'Qualified', 'Proposal', 'Won', 'Lost'] as const;
export type LeadStatus = (typeof statuses)[number];
export type ApiLead = { id: string; name: string; status: LeadStatus; valueCents: number };

export function parseLeads(payload: unknown): ApiLead[] {
  if (!Array.isArray(payload)) throw new Error('Expected an array of leads');
  const ids = new Set<string>();
  return payload.map((item: unknown) => {
    if (typeof item !== 'object' || item === null) throw new Error('Invalid lead');
    const row = item as Record<string, unknown>;
    if (typeof row.id !== 'string' || !row.id.trim() || ids.has(row.id)) {
      throw new Error('Lead IDs must be nonempty and unique');
    }
    if (typeof row.name !== 'string' || !row.name.trim()) throw new Error('Invalid lead name');
    if (typeof row.status !== 'string' || !statuses.some(status => status === row.status)) {
      throw new Error('Unknown lead status');
    }
    if (typeof row.valueCents !== 'number' || !Number.isSafeInteger(row.valueCents) || row.valueCents < 0) {
      throw new Error('Expected a nonnegative safe integer for valueCents');
    }
    ids.add(row.id);
    return { id: row.id, name: row.name, status: row.status as LeadStatus, valueCents: row.valueCents };
  });
}

export async function loadLeads(
  signal: AbortSignal,
  request: typeof fetch = fetch,
): Promise<ApiLead[]> {
  // Illustrative same-origin endpoint; you must implement and authorize it.
  const response = await request('/api/leads', { signal, cache: 'no-store' });
  if (!response.ok) throw new Error(`Could not load leads (HTTP ${response.status})`);
  const payload: unknown = await response.json();
  return parseLeads(payload);
}
