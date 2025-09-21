// import NavBar from "@/(frontend)/components/Navbar";
// import Footer from "@/(frontend)/components/Footer";
// import Header from "@/(frontend)/components/research-and-publication/Header";
// import VisionMision from "@/(frontend)/components/research-and-publication/VisionMision";
// import About from "@/(frontend)/components/research-and-publication/About";
// import Principles from "@/(frontend)/components/research-and-publication/Principles";
// import Program from "@/(frontend)/components/research-and-publication/Program";

// export default function Page() {
//   return (
//     <>
//       <NavBar />
//       <main className="font-halyard">
//         <Header />
//         <About />
//         <VisionMision />
//         <Principles />
//         <Program />
//       </main>
//       <Footer />
//     </>
//   );
// }

import NavBar from "@/(frontend)/components/Navbar";
import Footer from "@/(frontend)/components/Footer";
import Header from "@/(frontend)/components/research-and-publication/Header";
import About from "@/(frontend)/components/research-and-publication/About";
import VisionMision from "@/(frontend)/components/research-and-publication/VisionMision";
import Principles from "@/(frontend)/components/research-and-publication/Principles";
import Program from "@/(frontend)/components/research-and-publication/Program";
import {
  getComposeAbout,
  getComposeVisionMission,
  getComposePrograms,
  getComposePrinciples,
} from "@/(frontend)/lib/compose";

export const revalidate = 300;

export default async function Page() {
  const about = await getComposeAbout();
  const vm = await getComposeVisionMission();
  const programs = await getComposePrograms("research-program");
  const approaches = await getComposePrograms("approach");
  const fellowship = await getComposePrograms("fellowship");
  const principles = await getComposePrinciples();

  return (
    <>
      <NavBar />
      <main className="font-halyard">
        <Header
          // kalau header image/title kamu simpan juga di koleksi, tinggal fetch & pass di sini
          title="Center of Muslim Politics and World Society"
          background="/Img-Research/cover-compose.jpg"
        />
        <About
          logo={about?.logo?.url}
          logoAlt={about?.logo?.alt}
          heading={about?.heading}
          paragraphs={(about?.paragraphs ?? []).map((p) => p.text)}
        />
        <VisionMision
          vision={vm?.vision}
          missions={(vm?.missions ?? []).map((m) => m.text)}
        />
        <Principles
          items={principles.map((p) => ({
            icon: p.icon?.url,
            title: p.title,
            description: p.description,
          }))}
        />
        <Program
          programs={programs.map((p) => p.title)}
          approachesHeading="Research Approaches"
          approachesParagraphs={approaches.map((a) => a.description || a.title)}
          fellowshipParagraphs={fellowship.map((f) => f.description || f.title)}
        />
      </main>
      <Footer />
    </>
  );
}
