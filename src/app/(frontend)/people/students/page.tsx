import NavBar from "@/(frontend)/components/Navbar";
import Footer from "@/(frontend)/components/Footer";
import PeopleCard from "@/(frontend)/components/people/PeopleCard";
import { getPeopleByGroup } from "@/(frontend)/lib/payload-people";

export const revalidate = 300;

export default async function Page() {
  const items = await getPeopleByGroup("student");

  return (
    <>
      <NavBar />
      <section className="py-14 px-8 font-halyard bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto mb-12">
          <h3 className="text-1xl text-[#00748D] mb-2">
            Faculty of Social Sciences, UIII
          </h3>
          <h2 className="text-5xl font-medium text-brandNavy mb-14">
            Students
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((p) => (
              <PeopleCard
                key={p.id}
                href={`/people/${p.slug}`}
                image={p.photo?.sizes?.card?.url ?? p.photo?.url}
                alt={p.photo?.alt ?? p.name}
                name={p.name}
                position={p.position}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
