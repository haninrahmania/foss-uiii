// export default function About() {
//   return (
//     <section className="py-16 px-8 bg-[#01395E] text-white">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-center">
//         <div className="flex justify-center md:justify-start col-span-2">
//           <img
//             src="/Img-Research/logo-compose.png"
//             alt="COMPOSE Logo"
//             className="h-24 w-auto"
//           />
//         </div>
//         <div className="col-span-3">
//           <h2 className="text-3xl font-medium mb-6">About The Center</h2>
//           <p className="text-lg leading-relaxed mb-4">
//             Center of Muslim Politics and World Society (COMPOSE) is a center
//             for multi-disciplinary research and public outreach on
//             socio-economic and political developments of Muslim states and
//             societies and their inter-connections with world society. The Center
//             fosters collaboration in cutting-edge research and public outreach
//             by faculty members, researchers, and students from various
//             disciplinary backgrounds around the world. COMPOSE is housed under
//             the Faculty of Social Sciences at the Universitas Islam
//             International Indonesia (UIII).
//           </p>
//           <p className="text-lg leading-relaxed mb-4">
//             Research at COMPOSE covers both theoretical and empirical problems
//             on socio-economic and political developments of Muslim states and
//             societies and their inter-connections with world society. COMPOSE
//             tries to offer a distinctive approach to the empirical study of
//             Muslim states and societies by combining a rich understanding of the
//             historical development of these states and societies and advanced
//             knowledge and skills on research methodology in social sciences. The
//             research utilizes qualitative, quantitative and mixed-method
//             approaches in social sciences.
//           </p>
//           <p className="text-lg leading-relaxed mb-4">
//             COMPOSE acknowledges that mutual understanding between Muslim states
//             or societies and other parts of the world is necessary for the
//             creation of a peaceful and prosperous world society. For this
//             purpose, COMPOSE promotes sincere and constructive dialogues between
//             communities of scholars through research, publication and public
//             outreach.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

type Props = {
  logo?: string;
  logoAlt?: string;
  heading?: string;
  paragraphs?: string[];
};

export default function About({
  logo,
  logoAlt,
  heading = "About The Center",
  paragraphs = [],
}: Props) {
  /* ...render seperti sebelumnya... */
  return (
    <section className="py-16 px-8 bg-[#01395E] text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-center">
        <div className="flex justify-center md:justify-start col-span-2">
          <img
            src="/Img-Research/logo-compose.png"
            alt="COMPOSE Logo"
            className="h-24 w-auto"
          />
        </div>
        <div className="col-span-3">
          <h2 className="text-3xl font-medium mb-6">About The Center</h2>
          <p className="text-lg leading-relaxed mb-4">
            Center of Muslim Politics and World Society (COMPOSE) is a center
            for multi-disciplinary research and public outreach on
            socio-economic and political developments of Muslim states and
            societies and their inter-connections with world society. The Center
            fosters collaboration in cutting-edge research and public outreach
            by faculty members, researchers, and students from various
            disciplinary backgrounds around the world. COMPOSE is housed under
            the Faculty of Social Sciences at the Universitas Islam
            International Indonesia (UIII).
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Research at COMPOSE covers both theoretical and empirical problems
            on socio-economic and political developments of Muslim states and
            societies and their inter-connections with world society. COMPOSE
            tries to offer a distinctive approach to the empirical study of
            Muslim states and societies by combining a rich understanding of the
            historical development of these states and societies and advanced
            knowledge and skills on research methodology in social sciences. The
            research utilizes qualitative, quantitative and mixed-method
            approaches in social sciences.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            COMPOSE acknowledges that mutual understanding between Muslim states
            or societies and other parts of the world is necessary for the
            creation of a peaceful and prosperous world society. For this
            purpose, COMPOSE promotes sincere and constructive dialogues between
            communities of scholars through research, publication and public
            outreach.
          </p>
        </div>
      </div>
    </section>
  );
}
