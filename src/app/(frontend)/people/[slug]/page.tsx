import NavBar from "@/(frontend)/components/Navbar";
import Footer from "@/(frontend)/components/Footer";
import {
  getAllPeopleSlugs,
  getPersonBySlug,
} from "@/(frontend)/lib/payload-people";
import { notFound } from "next/navigation";

export const revalidate = 300;

export async function generateStaticParams() {
  const slugs = await getAllPeopleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const p = await getPersonBySlug(params.slug);
  return p
    ? { title: `${p.name} – FOSS UIII`, description: p.position ?? "Profile" }
    : {};
}

export default async function Page({ params }: { params: { slug: string } }) {
  const person = await getPersonBySlug(params.slug);
  if (!person) return notFound();

  return (
    <>
      <NavBar />
      <main className="font-halyard">
        <section className="px-8 py-12 bg-[#f9fafb]">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <div>
              <img
                src={person.photo?.url ?? "/Img-People/PeopleCard.png"}
                alt={person.photo?.alt ?? person.name}
                className="w-full rounded-xl shadow"
              />
            </div>
            <div className="md:col-span-2">
              <h1 className="text-4xl font-semibold text-brandNavy">
                {person.name}
              </h1>
              {person.position && (
                <p className="text-[#00748D] mt-2">{person.position}</p>
              )}
              {/* render bio/links jika kamu tambahkan di schema */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
