import "server-only";

const BASE = process.env.NEXT_PUBLIC_PAYLOAD_URL!;
const TOKEN = process.env.PAYLOAD_API_TOKEN;

type Media = { url?: string; alt?: string };

async function get<T>(path: string): Promise<T | null> {
  const res = await fetch(`${BASE}${path}`, {
    headers: { ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}) },
    next: { revalidate: 300 },
  });
  if (!res.ok) return null;
  return res.json();
}

// About (ambil entry pertama)
export async function getComposeAbout() {
  const data = await get<{
    docs: { heading: string; logo?: Media; paragraphs?: { text: string }[] }[];
  }>(`/api/compose-about?limit=1&depth=1`);
  return data?.docs?.[0] ?? null;
}

// Vision & Mission (ambil entry pertama)
export async function getComposeVisionMission() {
  const data = await get<{
    docs: { vision: string; missions?: { text: string }[] }[];
  }>(`/api/compose-vision-mission?limit=1`);
  return data?.docs?.[0] ?? null;
}

// Programs / Approaches / Fellowship → satu koleksi, filter by type
export async function getComposePrograms(
  type: "research-program" | "approach" | "fellowship"
) {
  const qs = new URLSearchParams({
    "where[type][equals]": type,
    sort: "sortOrder",
    depth: "0",
    limit: "100",
  });
  const data = await get<{ docs: { title: string; description?: string }[] }>(
    `/api/compose-programs?${qs.toString()}`
  );
  return data?.docs ?? [];
}

// Principles / Goals
export async function getComposePrinciples() {
  const data = await get<{
    docs: { title: string; description: string; icon?: Media }[];
  }>(`/api/compose-principles?sort=sortOrder&depth=1&limit=100`);
  return data?.docs ?? [];
}
