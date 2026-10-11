'use client';

import { useState } from 'react';
import type { ApiLead } from './lead-api';
import type { LeadsState } from './use-leads';

// Teaching UI. Call from a Client Component; callbacks do not cross a server boundary.
export function LeadResults({ state, onRetry }: {
  state: LeadsState;
  onRetry: () => void;
}) {
  const [query, setQuery] = useState('');
  const normalized = query.trim().toLowerCase();
  const records: ApiLead[] = state.kind === 'ready' ? state.records : [];
  const visible = records.filter(lead => lead.name.toLowerCase().includes(normalized));

  let message: string;
  if (state.kind === 'loading') message = 'Loading leads…';
  else if (state.kind === 'error') message = state.message;
  else if (records.length === 0) message = 'No leads returned by this request.';
  else if (visible.length === 0) message = 'No leads match your search.';
  else message = `${visible.length} of ${records.length} leads shown.`;

  return (
    <section aria-label="Lead results">
      <label>
        Search lead names
        <input
          type="search" value={query}
          onChange={event => setQuery(event.target.value)}
          disabled={state.kind !== 'ready' || records.length === 0}
        />
      </label>
      {query !== '' && (
        <button type="button" onClick={() => setQuery('')}>Clear filters</button>
      )}
      {/* Keep this node mounted; announce updates without moving focus. */}
      <p role="status" aria-atomic="true">{message}</p>
      <div aria-busy={state.kind === 'loading'}>
        {state.kind === 'error' && (
          <button type="button" onClick={onRetry}>Retry loading leads</button>
        )}
        {state.kind === 'ready' && visible.length > 0 && (
          <table>
            <caption>Matching leads</caption>
            <thead><tr><th scope="col">Name</th><th scope="col">Status</th></tr></thead>
            <tbody>{visible.map(lead => (
              <tr key={lead.id}><td>{lead.name}</td><td>{lead.status}</td></tr>
            ))}</tbody>
          </table>
        )}
      </div>
    </section>
  );
}
