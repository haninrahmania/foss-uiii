// export default function Program() {
//   return (
//     <main className="bg-white text-brandNavy">
//       <section className="py-16 px-8">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-5xl font-medium mb-8 flex items-center gap-4">
//             Research Programs
//           </h2>
//           <p className="text-lg mb-4">
//             COMPOSE develops several research programs that aim to tackle
//             fundamental problems in the study of socio-economic and political
//             developments of Muslim states and societies and their
//             inter-connections with world society. These research programs
//             include:
//           </p>
//           <ul className="list-disc list-inside space-y-1 text-lg leading-relaxed">
//             <li>Conflict and peace resolution in a globalized world</li>
//             <li>Environmental issues and Muslim societies</li>
//             <li>
//               Political institutions and electoral competitions in Muslim
//               societies
//             </li>
//             <li>
//               Education, science, and technological development in the Muslim
//               World
//             </li>
//             <li>Contentious politics and social movements</li>
//             <li>Transnationalism and globalized Muslim societies</li>
//             <li>Middle-power politics and world society</li>
//             <li>Conflict and cooperation in the Muslim world</li>
//             <li>Political economy of Muslim states and societies</li>
//           </ul>
//         </div>
//       </section>

//       <hr className="border-t border-brandNavy w-6/12 mx-auto" />

//       <section className="py-16 px-8 text-brandNavy">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-5xl font-medium mb-8 flex items-center gap-4">
//             Research Approaches
//           </h2>
//           <p className="text-lg leading-relaxed mb-4">
//             Research at COMPOSE uses quantitative, qualitative, and mixed-method
//             approaches. Quantitative approach is used to explain general
//             patterns and establish causal impacts in the pattern, while
//             qualitative approach is employed to elucidate its causal mechanism.
//             Mixed-method approaches are used to combine the strength of both
//             qualitative and quantitative approaches to political explanation.
//             Research at COMPOSE also utilises rigorous and updated research
//             methodologies in social science in accordance with international
//             standards.
//           </p>
//           <p className="text-lg leading-relaxed">
//             As part of its mission, COMPOSE promotes constructive and sincere
//             dialogues between different communities of scholars and faith
//             through public discussion, seminars, workshops and conferences. The
//             Center will also engage with policy makers to promote its research
//             findings in order to improve public policies.
//           </p>
//         </div>
//       </section>

//       <section className="py-16 px-8 bg-[#01395E] text-white">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-5xl font-medium mb-8 flex items-center flex items-center gap-4">
//             <img
//               src="/Img-Research/fellow.svg"
//               alt="fellow Icon"
//               className="w-10 h-10"
//             />
//             Fellowship Opportunities
//           </h2>
//           <p className="text-lg leading-relaxed mb-4">
//             Research at COMPOSE uses quantitative, qualitative, and mixed-method
//             approaches. Quantitative approach is used to explain general
//             patterns and establish causal impacts in the pattern, while
//             qualitative approach is employed to elucidate its causal mechanism.
//             Mixed-method approaches are used to combine the strength of both
//             qualitative and quantitative approaches to political explanation.
//             Research at COMPOSE also utilises rigorous and updated research
//             methodologies in social science in accordance with international
//             standards.
//           </p>
//           <p className="text-lg leading-relaxed mb-4">
//             As part of its mission, COMPOSE promotes constructive and sincere
//             dialogues between different communities of scholars and faith
//             through public discussion, seminars, workshops and conferences. The
//             Center will also engage with policy makers to promote its research
//             findings in order to improve public policies.
//           </p>
//         </div>
//       </section>
//       <hr className="border-t border-white-300 mx-auto" />
//     </main>
//   );
// }

type Props = {
  programs?: string[];
  approachesHeading?: string;
  approachesParagraphs?: string[];
  fellowshipIcon?: string;
  fellowshipParagraphs?: string[];
};

export default function Program({
  programs = [],
  approachesHeading = "Research Approaches",
  approachesParagraphs = [],
  fellowshipIcon = "/Img-Research/fellow.svg",
  fellowshipParagraphs = [],
}: Props) {
  /* ... */
  return (
    <main className="bg-white text-brandNavy">
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-medium mb-8 flex items-center gap-4">
            Research Programs
          </h2>
          <p className="text-lg mb-4">
            COMPOSE develops several research programs that aim to tackle
            fundamental problems in the study of socio-economic and political
            developments of Muslim states and societies and their
            inter-connections with world society. These research programs
            include:
          </p>
          <ul className="list-disc list-inside space-y-1 text-lg leading-relaxed">
            <li>Conflict and peace resolution in a globalized world</li>
            <li>Environmental issues and Muslim societies</li>
            <li>
              Political institutions and electoral competitions in Muslim
              societies
            </li>
            <li>
              Education, science, and technological development in the Muslim
              World
            </li>
            <li>Contentious politics and social movements</li>
            <li>Transnationalism and globalized Muslim societies</li>
            <li>Middle-power politics and world society</li>
            <li>Conflict and cooperation in the Muslim world</li>
            <li>Political economy of Muslim states and societies</li>
          </ul>
        </div>
      </section>

      <hr className="border-t border-brandNavy w-6/12 mx-auto" />

      <section className="py-16 px-8 text-brandNavy">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-medium mb-8 flex items-center gap-4">
            Research Approaches
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Research at COMPOSE uses quantitative, qualitative, and mixed-method
            approaches. Quantitative approach is used to explain general
            patterns and establish causal impacts in the pattern, while
            qualitative approach is employed to elucidate its causal mechanism.
            Mixed-method approaches are used to combine the strength of both
            qualitative and quantitative approaches to political explanation.
            Research at COMPOSE also utilises rigorous and updated research
            methodologies in social science in accordance with international
            standards.
          </p>
          <p className="text-lg leading-relaxed">
            As part of its mission, COMPOSE promotes constructive and sincere
            dialogues between different communities of scholars and faith
            through public discussion, seminars, workshops and conferences. The
            Center will also engage with policy makers to promote its research
            findings in order to improve public policies.
          </p>
        </div>
      </section>

      <section className="py-16 px-8 bg-[#01395E] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-medium mb-8 flex items-center flex items-center gap-4">
            <img
              src="/Img-Research/fellow.svg"
              alt="fellow Icon"
              className="w-10 h-10"
            />
            Fellowship Opportunities
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Research at COMPOSE uses quantitative, qualitative, and mixed-method
            approaches. Quantitative approach is used to explain general
            patterns and establish causal impacts in the pattern, while
            qualitative approach is employed to elucidate its causal mechanism.
            Mixed-method approaches are used to combine the strength of both
            qualitative and quantitative approaches to political explanation.
            Research at COMPOSE also utilises rigorous and updated research
            methodologies in social science in accordance with international
            standards.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            As part of its mission, COMPOSE promotes constructive and sincere
            dialogues between different communities of scholars and faith
            through public discussion, seminars, workshops and conferences. The
            Center will also engage with policy makers to promote its research
            findings in order to improve public policies.
          </p>
        </div>
      </section>
      <hr className="border-t border-white-300 mx-auto" />
    </main>
  );
}
