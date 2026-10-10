"use client";

import { useState } from "react";
import { filterLeads, leads, statuses, type StatusFilter } from "../lib/leads";

export default function LeadTable() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<StatusFilter>("All");
  const visible = filterLeads(leads, query, status);
  const hasFilters = query !== "" || status !== "All";

  return (
    <main className="workspace">
      <header className="topbar">
        <a className="brand" href="/" aria-label="LeadFlow sample home">
          <span className="brand-mark">L</span> LeadFlow
          <span className="sample-label">SAMPLE</span>
        </a>
        <a className="text-link" href="#about">
          About this sample <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="intro" aria-labelledby="page-title">
        <div>
          <p className="eyebrow">
            <span className="dot" /> A SMALL STARTER FOR YOUR NEXT PROJECT
          </p>
          <h1 id="page-title">
            Your pipeline,
            <br />
            at a glance.
          </h1>
          <p className="intro-copy">
            A focused lead table you can make your own.
            <br className="desktop-break" /> Search, filter and start with a
            little less groundwork.
          </p>
        </div>
        <div className="intro-note">
          <span className="note-icon" aria-hidden="true">
            ⌘
          </span>
          <div>
            <strong>Built for developers</strong>
            <p>Next.js · TypeScript · Plain CSS</p>
            <span>Free source sample</span>
          </div>
        </div>
      </section>

      <section className="metrics" aria-label="Mock dataset overview">
        <div>
          <p>Total leads</p>
          <strong>{leads.length.toString().padStart(2, "0")}</strong>
          <span>Fictional contacts</span>
        </div>
        <div>
          <p>In progress</p>
          <strong>
            {leads
              .filter((lead) =>
                ["New", "Qualified", "Proposal"].includes(lead.status),
              )
              .length.toString()
              .padStart(2, "0")}
          </strong>
          <span>New through proposal</span>
        </div>
        <div>
          <p>Won</p>
          <strong>
            {leads
              .filter((lead) => lead.status === "Won")
              .length.toString()
              .padStart(2, "0")}
          </strong>
          <span>Sample closed leads</span>
        </div>
      </section>

      <section className="leads-panel" aria-labelledby="leads-title">
        <div className="panel-heading">
          <div>
            <h2 id="leads-title">
              All leads <span>{leads.length}</span>
            </h2>
            <p>Your starting point for a custom lead dashboard.</p>
          </div>
          <span className="demo-tag">
            <span className="dot" /> MOCK DATA
          </span>
        </div>
        <div className="toolbar">
          <div className="search-control">
            <label className="sr-only" htmlFor="search">
              Search leads
            </label>
            <span aria-hidden="true">⌕</span>
            <input
              id="search"
              type="search"
              placeholder="Search name or company…"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <div className="status-control">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              aria-label="Lead status"
              value={status}
              onChange={(event) =>
                setStatus(event.target.value as StatusFilter)
              }
            >
              <option value="All">All statuses</option>
              {statuses.map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          </div>
          {hasFilters && (
            <button
              className="clear-button"
              type="button"
              onClick={() => {
                setQuery("");
                setStatus("All");
              }}
            >
              Clear filters
            </button>
          )}
        </div>
        <div
          className="table-scroll"
          tabIndex={0}
          aria-label="Lead table scroll area"
        >
          <table aria-label="Fictional leads">
            <caption className="sr-only">
              Fictional lead contacts. Search and status controls filter these
              rows.
            </caption>
            <thead>
              <tr>
                <th scope="col">Contact</th>
                <th scope="col">Company</th>
                <th scope="col">Status</th>
                <th scope="col">Owner</th>
                <th scope="col">Source</th>
                <th scope="col">Added</th>
              </tr>
            </thead>
            <tbody>
              {visible.map((lead) => (
                <tr key={lead.id}>
                  <td>
                    <div className="contact">
                      <span className="avatar" aria-hidden="true">
                        {lead.name
                          .split(" ")
                          .map((part) => part[0])
                          .join("")}
                      </span>
                      <div>
                        <strong>{lead.name}</strong>
                        <span>{lead.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="company">{lead.company}</td>
                  <td>
                    <span
                      className={`status-badge status-${lead.status.toLowerCase()}`}
                    >
                      <span aria-hidden="true">●</span>
                      {lead.status}
                    </span>
                  </td>
                  <td>{lead.owner}</td>
                  <td className="source">{lead.source}</td>
                  <td className="added">{lead.added}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {visible.length === 0 && (
          <div className="empty-state">
            <span aria-hidden="true">⌕</span>
            <h3>No matching leads</h3>
            <p>
              Try a different name, company or status. Clear filters to see the
              full sample.
            </p>
          </div>
        )}
        <div className="table-footer">
          <span role="status" aria-live="polite">
            Showing {visible.length} of {leads.length} leads
          </span>
          <span className="scroll-hint">
            Scroll sideways on smaller screens
          </span>
        </div>
      </section>

      <footer id="about" className="about">
        <div>
          <span className="eyebrow">A STARTING POINT, READY TO ADAPT</span>
          <h2>Small by design.</h2>
          <p>
            This free sample includes a lead table, name/company search and
            status filters. All contacts and metrics are fictional. Filters
            reset on refresh.
          </p>
        </div>
        <div className="scope-note">
          <strong>What’s included</strong>
          <p>Source code · Mock data · Setup guide</p>
          <span>
            No backend, sign-in, saved changes or CRM integrations. Detail and
            Kanban views are outside this sample.
          </span>
        </div>
      </footer>
      <div className="bottom-line">
        <span>LeadFlow / Free sample</span>
        <span>Made to be customized.</span>
      </div>
    </main>
  );
}
