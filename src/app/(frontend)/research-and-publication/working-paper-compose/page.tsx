// import NavBar from "@/(frontend)/components/Navbar";
// import Footer from "@/(frontend)/components/Footer";
// import About from "@/(frontend)/components/working-paper-compose/About";
// import Research from "@/(frontend)/components/working-paper-compose/Research";

// export default function Page() {
//   return (
//     <>
//       <NavBar />
//       <main className="font-halyard">
//         <About />
//         <Research />
//       </main>
//       <Footer />
//     </>
//   );
// }

import NavBar from "@/(frontend)/components/Navbar";
import Footer from "@/(frontend)/components/Footer";
import { getPublicationsByType } from "@/(frontend)/lib/publications";

export const revalidate = 300;

export default async function Page() {
  const list = await getPublicationsByType("working-paper", 18);

  return (
    <>
      <NavBar />
      <main className="font-halyard">
        <section className="pt-16 pb-10 px-8 bg-[#f9fafb] text-brandNavy">
          <div className="max-w-6xl mx-auto">
            <p className="text-5xl font-medium leading-relaxed mb-4">
              Working Paper – COMPOSE
            </p>
          </div>
        </section>

        <section className="bg-[#f9fafb] px-8">
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 justify-items-center">
              {list.map((item) => (
                <article
                  key={item.id}
                  className="w-full max-w-sm bg-white shadow-md hover:shadow-xl transition-shadow duration-300 group transform transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={item.cover?.url ?? "/landing-page/cover-research.png"}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="w-full h-[3px] bg-[#4C839E]" />
                  <div className="p-5">
                    <h3 className="text-base font-medium leading-snug mb-2 text-black relative inline-block">
                      <span className="relative z-10">{item.title}</span>
                      <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-[#4C839E] transition-all duration-300 group-hover:w-full"></span>
                    </h3>
                    <div className="justify-between mt-2 text-sm">
                      <p className="text-gray-700">{item.authorName}</p>
                      <p className="text-gray-600 mt-2">
                        {new Date(item.publishedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
