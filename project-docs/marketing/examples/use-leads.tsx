'use client';

import { useEffect, useState } from 'react';
import { loadLeads, type ApiLead } from './lead-api';

export type LeadsState =
  | { kind: 'loading' }
  | { kind: 'error'; message: string }
  | { kind: 'ready'; records: ApiLead[] };

export function useLeads() {
  const [state, setState] = useState<LeadsState>({ kind: 'loading' });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    let active = true;
    setState({ kind: 'loading' });
    loadLeads(controller.signal).then(
      records => { if (active) setState({ kind: 'ready', records }); },
      () => { if (active) setState({ kind: 'error', message: 'Could not load leads. Try again.' }); },
    );
    return () => { active = false; controller.abort(); };
  }, [attempt]);

  return { state, retry: () => setAttempt(value => value + 1) };
}
