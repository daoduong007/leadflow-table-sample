import { strict as assert } from "node:assert";
import { test } from "node:test";
import { filterLeads, type Lead } from "../src/lib/leads";

const records: Lead[] = [
  {
    id: "a",
    name: "Mina Chen",
    company: "Northstar",
    email: "mina@example.com",
    owner: "Alex",
    status: "Qualified",
    source: "Website",
    added: "Oct 10, 2026",
  },
  {
    id: "b",
    name: "Sam Reed",
    company: "Harbor",
    email: "sam@example.com",
    owner: "Jordan",
    status: "New",
    source: "Referral",
    added: "Oct 09, 2026",
  },
  {
    id: "c",
    name: "Mina Park",
    company: "Summit",
    email: "park@example.com",
    owner: "Alex",
    status: "Won",
    source: "Website",
    added: "Oct 08, 2026",
  },
];

test("search ignores case and surrounding whitespace", () => {
  assert.deepEqual(
    filterLeads(records, "  MINA  ", "All").map((l) => l.id),
    ["a", "c"],
  );
});
test("search matches company", () => {
  assert.deepEqual(
    filterLeads(records, "harbor", "All").map((l) => l.id),
    ["b"],
  );
});
test("search and status narrow results together", () => {
  assert.deepEqual(
    filterLeads(records, "mina", "Qualified").map((l) => l.id),
    ["a"],
  );
  assert.deepEqual(filterLeads(records, "mina", "New"), []);
});
test("empty search shows all or the chosen status without changing input", () => {
  const before = structuredClone(records);
  assert.deepEqual(filterLeads(records, "", "All"), records);
  assert.deepEqual(
    filterLeads(records, " ", "Won").map((l) => l.id),
    ["c"],
  );
  assert.deepEqual(records, before);
});
test("unmatched queries and empty datasets return no rows", () => {
  assert.deepEqual(filterLeads(records, "nonexistent", "All"), []);
  assert.deepEqual(filterLeads([], "", "All"), []);
});
