import "server-only";

const BASE = process.env.NEXT_PUBLIC_PAYLOAD_URL!;
const TOKEN = process.env.PAYLOAD_API_TOKEN;

export type Media = { url?: string; alt?: string };
export type Publication = {
  id: string;
  title: string;
  slug: string;
  type: "lecturer" | "student" | "working-paper" | "compose-article";
  cover?: Media;
  authorName: string;
  publishedAt: string;
  excerpt?: string;
  content?: any;
  tags?: { tag: string }[];
  isActive: boolean;
  isFeatured?: boolean;
};

type Paginated<T> = { docs: T[] };

async function get<T>(path: string): Promise<T | null> {
  const res = await fetch(`${BASE}${path}`, {
    headers: { ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}) },
    next: { revalidate: 300 },
  });
  if (!res.ok) return null;
  return res.json();
}

export async function getPublicationsByType(
  type: Publication["type"],
  limit = 18
): Promise<Publication[]> {
  const qs = new URLSearchParams({
    "where[isActive][equals]": "true",
    "where[type][equals]": type,
    depth: "1",
    sort: "-publishedAt",
    limit: String(limit),
  });
  const data = await get<Paginated<Publication>>(
    `/api/publications?${qs.toString()}`
  );
  return data?.docs ?? [];
}

export async function getPublicationBySlug(
  slug: string
): Promise<Publication | null> {
  const qs = new URLSearchParams({
    "where[slug][equals]": slug,
    "where[isActive][equals]": "true",
    depth: "1",
    limit: "1",
  });
  const data = await get<Paginated<Publication>>(
    `/api/publications?${qs.toString()}`
  );
  return data?.docs?.[0] ?? null;
}

export async function getAllPublicationSlugs(
  type?: Publication["type"]
): Promise<string[]> {
  const qs = new URLSearchParams({
    ...(type ? { "where[type][equals]": type } : {}),
    "where[isActive][equals]": "true",
    depth: "0",
    limit: "1000",
  });
  const data = await get<Paginated<Publication>>(
    `/api/publications?${qs.toString()}`
  );
  return (data?.docs ?? []).map((d) => d.slug);
}
