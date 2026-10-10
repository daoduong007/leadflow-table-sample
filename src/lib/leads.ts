export type LeadStatus = "New" | "Qualified" | "Proposal" | "Won" | "Lost";
export type StatusFilter = LeadStatus | "All";
export interface Lead {
  id: string;
  name: string;
  company: string;
  email: string;
  owner: string;
  status: LeadStatus;
  source: string;
  added: string;
}

export const statuses: LeadStatus[] = [
  "New",
  "Qualified",
  "Proposal",
  "Won",
  "Lost",
];

export function filterLeads(
  leads: readonly Lead[],
  query: string,
  status: StatusFilter,
): Lead[] {
  const search = query.trim().toLowerCase();
  return leads.filter(
    (lead) =>
      (status === "All" || lead.status === status) &&
      (lead.name.toLowerCase().includes(search) ||
        lead.company.toLowerCase().includes(search)),
  );
}

export const leads: Lead[] = [
  {
    id: "L001",
    name: "Mina Chen",
    company: "Northstar Studio",
    email: "mina@example.com",
    owner: "Alex Morgan",
    status: "Qualified",
    source: "Website",
    added: "Oct 10, 2026",
  },
  {
    id: "L002",
    name: "Sam Reed",
    company: "Harbor Design",
    email: "sam@example.com",
    owner: "Jordan Lee",
    status: "New",
    source: "Referral",
    added: "Oct 10, 2026",
  },
  {
    id: "L003",
    name: "Lena Park",
    company: "Summit Works",
    email: "lena@example.com",
    owner: "Alex Morgan",
    status: "Proposal",
    source: "Website",
    added: "Oct 09, 2026",
  },
  {
    id: "L004",
    name: "Theo Brooks",
    company: "Fieldnote",
    email: "theo@example.com",
    owner: "Casey Taylor",
    status: "Won",
    source: "Referral",
    added: "Oct 09, 2026",
  },
  {
    id: "L005",
    name: "Aya Sato",
    company: "Evergreen Lab",
    email: "aya@example.com",
    owner: "Jordan Lee",
    status: "New",
    source: "Event",
    added: "Oct 08, 2026",
  },
  {
    id: "L006",
    name: "Noah Ellis",
    company: "Forma Collective",
    email: "noah@example.com",
    owner: "Casey Taylor",
    status: "Qualified",
    source: "Website",
    added: "Oct 08, 2026",
  },
  {
    id: "L007",
    name: "Eva Rossi",
    company: "Meridian",
    email: "eva@example.com",
    owner: "Alex Morgan",
    status: "Proposal",
    source: "Referral",
    added: "Oct 07, 2026",
  },
  {
    id: "L008",
    name: "Omar Malik",
    company: "Brightline",
    email: "omar@example.com",
    owner: "Jordan Lee",
    status: "Lost",
    source: "Event",
    added: "Oct 07, 2026",
  },
  {
    id: "L009",
    name: "Isla Hart",
    company: "Oak & Coast",
    email: "isla@example.com",
    owner: "Casey Taylor",
    status: "Won",
    source: "Website",
    added: "Oct 06, 2026",
  },
  {
    id: "L010",
    name: "Leo Silva",
    company: "Daybreak",
    email: "leo@example.com",
    owner: "Alex Morgan",
    status: "New",
    source: "Referral",
    added: "Oct 06, 2026",
  },
  {
    id: "L011",
    name: "Nia Wells",
    company: "Atlas House",
    email: "nia@example.com",
    owner: "Jordan Lee",
    status: "Qualified",
    source: "Website",
    added: "Oct 05, 2026",
  },
  {
    id: "L012",
    name: "Jules Martin",
    company: "Plainspace",
    email: "jules@example.com",
    owner: "Casey Taylor",
    status: "Proposal",
    source: "Event",
    added: "Oct 05, 2026",
  },
];
