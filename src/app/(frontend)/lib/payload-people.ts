import "server-only";

const BASE = process.env.NEXT_PUBLIC_PAYLOAD_URL!;
const TOKEN = process.env.PAYLOAD_API_TOKEN;

export type Media = {
  url?: string;
  alt?: string;
  sizes?: { card?: { url?: string } };
};
export type Person = {
  id: string;
  name: string;
  slug: string;
  group: "faculty" | "secretariat" | "student";
  position?: string;
  program?: string;
  photo?: Media;
  isActive: boolean;
  isFeatured?: boolean;
  sortOrder?: number;
};

type Paginated<T> = { docs: T[] };

async function get<T>(path: string): Promise<T | null> {
  const res = await fetch(`${BASE}${path}`, {
    headers: { ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}) },
    next: { revalidate: 300 }, // ISR 5 menit
  });
  if (!res.ok) return null;
  return res.json();
}

export async function getPeopleByGroup(
  group: Person["group"],
  { program, limit = 40 }: { program?: string; limit?: number } = {}
): Promise<Person[]> {
  const qs = new URLSearchParams({
    "where[isActive][equals]": "true",
    "where[group][equals]": group,
    ...(program ? { "where[program][equals]": program } : {}),
    depth: "1",
    sort: "isFeatured,-sortOrder,name",
    limit: String(limit),
  });
  const data = await get<Paginated<Person>>(`/api/people?${qs.toString()}`);
  return data?.docs ?? [];
}

export async function getPersonBySlug(slug: string): Promise<Person | null> {
  const qs = new URLSearchParams({
    "where[slug][equals]": slug,
    "where[isActive][equals]": "true",
    depth: "1",
    limit: "1",
  });
  const data = await get<Paginated<Person>>(`/api/people?${qs.toString()}`);
  return data?.docs?.[0] ?? null;
}

export async function getAllPeopleSlugs(): Promise<string[]> {
  const qs = new URLSearchParams({
    "where[isActive][equals]": "true",
    depth: "0",
    limit: "1000",
  });
  const data = await get<Paginated<Person>>(`/api/people?${qs.toString()}`);
  return (data?.docs ?? []).map((p) => p.slug);
}
