// export default function VisionMision() {
//   return (
//     <section className="py-20 px-8 bg-white">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 text-brandNavy">
//         <div>
//           <h2 className="text-5xl font-medium flex items-center gap-2">
//             <img
//               src="/Img-AboutFaculty/eye.svg"
//               alt="Eye Icon"
//               className="w-8 h-8"
//             />
//             Vision
//           </h2>
//           <p className="mt-6 text-xl">
//             COMPOSE’s vision is to be a center of excellence to advance research
//             on the socio-economic and political development of Muslim states and
//             societies and their inter-connections with world society; and to
//             promote a mutual understanding between Muslim states or societies
//             and others through research, publication, and public outreach.
//           </p>
//         </div>
//         <div>
//           <h2 className="text-5xl font-medium flex items-center gap-2">
//             <img
//               src="/Img-AboutFaculty/Target.svg"
//               alt="Target Icon"
//               className="w-8 h-8"
//             />
//             Mission
//           </h2>
//           <ol className="mt-6 space-y-3 list-decimal list-inside text-xl">
//             <li>
//               Conduct rigorous research on the socio-economic and political
//               development of Muslim states and societies and their
//               interconnections with world society.
//             </li>
//             <li>
//               Publish its research findings in leading national and
//               international peer-reviewed academic journals or in a book form in
//               cooperation with reputable publishers.
//             </li>
//             <li>
//               Disseminate its research findings to academic communities and the
//               public through discussions, seminars, workshops, and conferences
//               in both domestic and international.
//             </li>
//             <li>
//               Disseminate its research findings to the public through the
//               publication of policy briefs, popular media articles, and social
//               media highlights.
//             </li>
//             <li>
//               Engage with policymakers in Indonesia and international ones on
//               issues that are relevant to the research topics.
//             </li>
//           </ol>
//         </div>
//       </div>
//     </section>
//   );
// }

type Props = {
  visionIcon?: string;
  missionIcon?: string;
  vision?: string;
  missions?: string[];
};

export default function VisionMision({
  visionIcon = "/Img-AboutFaculty/eye.svg",
  missionIcon = "/Img-AboutFaculty/Target.svg",
  vision = "COMPOSE’s vision is ...",
  missions = [],
}: Props) {
  /* ... */
  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 text-brandNavy">
        <div>
          <h2 className="text-5xl font-medium flex items-center gap-2">
            <img
              src="/Img-AboutFaculty/eye.svg"
              alt="Eye Icon"
              className="w-8 h-8"
            />
            Vision
          </h2>
          <p className="mt-6 text-xl">
            COMPOSE’s vision is to be a center of excellence to advance research
            on the socio-economic and political development of Muslim states and
            societies and their inter-connections with world society; and to
            promote a mutual understanding between Muslim states or societies
            and others through research, publication, and public outreach.
          </p>
        </div>
        <div>
          <h2 className="text-5xl font-medium flex items-center gap-2">
            <img
              src="/Img-AboutFaculty/Target.svg"
              alt="Target Icon"
              className="w-8 h-8"
            />
            Mission
          </h2>
          <ol className="mt-6 space-y-3 list-decimal list-inside text-xl">
            <li>
              Conduct rigorous research on the socio-economic and political
              development of Muslim states and societies and their
              interconnections with world society.
            </li>
            <li>
              Publish its research findings in leading national and
              international peer-reviewed academic journals or in a book form in
              cooperation with reputable publishers.
            </li>
            <li>
              Disseminate its research findings to academic communities and the
              public through discussions, seminars, workshops, and conferences
              in both domestic and international.
            </li>
            <li>
              Disseminate its research findings to the public through the
              publication of policy briefs, popular media articles, and social
              media highlights.
            </li>
            <li>
              Engage with policymakers in Indonesia and international ones on
              issues that are relevant to the research topics.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
