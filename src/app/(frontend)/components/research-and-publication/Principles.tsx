// export default function Principles() {
//   return (
//     <section className="py-16 px-8 bg-[#00748D] text-white ">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-5xl font-medium mb-12">Our Goals</h2>
//         <div className="grid md:grid-cols-3 gap-14 text-sm md:text-base mb-8">
//           <div>
//             <div className="mb-4 flex text-left">
//               <img
//                 src="/Img-Research/Independent.svg"
//                 alt="Book Icon"
//                 className="h-20 w-auto"
//               />
//             </div>
//             <p className="text-left text-xl font-medium">Independent:</p>
//             <p className="text-left text-xl">
//               COMPOSE in its works does not represent or support the interests
//               of a particular group, ideology, religion, country, or region.
//             </p>
//           </div>
//           <div>
//             <div className="mb-4 flex text-left">
//               <img
//                 src="/Img-AboutFaculty/Brain.svg"
//                 alt="World Icon"
//                 className="w-20 h-20"
//               />
//             </div>
//             <p className="text-left text-xl font-medium">Objective:</p>
//             <p className="text-left text-xl">
//               COMPOSE always bases its views or perspectives on evidence and
//               does not hold a prior bias for or against a particular view or
//               perspective.
//             </p>
//           </div>
//           <div>
//             <div className="mb-4 flex text-left">
//               <img
//                 src="/Img-Research/science.svg"
//                 alt="Brain Icon"
//                 className="w-20 h-20"
//               />
//             </div>
//             <p className="text-left text-xl font-medium">Rigorius:</p>
//             <p className="text-left text-xl">
//               COMPOSE in conducting its works always upholds scientific method
//               and implements it as best as possible.
//             </p>
//           </div>
//           <div>
//             <div className="mb-4 flex text-left">
//               <img
//                 src="/Img-Research/transparent.svg"
//                 alt="Brain Icon"
//                 className="w-20 h-20"
//               />
//             </div>
//             <p className="text-left text-xl font-medium">Transparent:</p>
//             <p className="text-left text-xl">
//               COMPOSE does not conceal certain aspects of its works
//               unnecessarily and is open to inquiries on all aspects of its
//               research and operations as far as allowed by the law of the
//               country.
//             </p>
//           </div>
//           <div>
//             <div className="mb-4 flex text-left">
//               <img
//                 src="/Img-Research/ethic.svg"
//                 alt="Brain Icon"
//                 className="w-20 h-20"
//               />
//             </div>
//             <p className="text-left text-xl font-medium">Ethical:</p>
//             <p className="text-left text-xl">
//               COMPOSE in its works always holds the highest ethical standard and
//               does not condone any behaviour that is dishonest, untrustworthy,
//               degrading or endangering others, or outright criminal.
//             </p>
//           </div>
//           <div>
//             <div>
//               <div className="mb-4 flex text-left">
//                 <img
//                   src="/Img-AboutFaculty/World.svg"
//                   alt="People Icon"
//                   className="w-20 h-20"
//                 />
//               </div>
//               <p className="text-left text-xl font-medium">Relevant:</p>
//               <p className="text-left text-xl">
//                 COMPOSE works on issues and problems that are relevant to the
//                 future development of Muslim politics and world society.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

type Item = { icon?: string; title: string; description: string };
type Props = { items?: Item[] };

export default function Principles({ items = [] }: Props) {
  /* ... */
  return (
    <section className="py-16 px-8 bg-[#00748D] text-white ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-medium mb-12">Our Goals</h2>
        <div className="grid md:grid-cols-3 gap-14 text-sm md:text-base mb-8">
          <div>
            <div className="mb-4 flex text-left">
              <img
                src="/Img-Research/Independent.svg"
                alt="Book Icon"
                className="h-20 w-auto"
              />
            </div>
            <p className="text-left text-xl font-medium">Independent:</p>
            <p className="text-left text-xl">
              COMPOSE in its works does not represent or support the interests
              of a particular group, ideology, religion, country, or region.
            </p>
          </div>
          <div>
            <div className="mb-4 flex text-left">
              <img
                src="/Img-AboutFaculty/Brain.svg"
                alt="World Icon"
                className="w-20 h-20"
              />
            </div>
            <p className="text-left text-xl font-medium">Objective:</p>
            <p className="text-left text-xl">
              COMPOSE always bases its views or perspectives on evidence and
              does not hold a prior bias for or against a particular view or
              perspective.
            </p>
          </div>
          <div>
            <div className="mb-4 flex text-left">
              <img
                src="/Img-Research/science.svg"
                alt="Brain Icon"
                className="w-20 h-20"
              />
            </div>
            <p className="text-left text-xl font-medium">Rigorius:</p>
            <p className="text-left text-xl">
              COMPOSE in conducting its works always upholds scientific method
              and implements it as best as possible.
            </p>
          </div>
          <div>
            <div className="mb-4 flex text-left">
              <img
                src="/Img-Research/transparent.svg"
                alt="Brain Icon"
                className="w-20 h-20"
              />
            </div>
            <p className="text-left text-xl font-medium">Transparent:</p>
            <p className="text-left text-xl">
              COMPOSE does not conceal certain aspects of its works
              unnecessarily and is open to inquiries on all aspects of its
              research and operations as far as allowed by the law of the
              country.
            </p>
          </div>
          <div>
            <div className="mb-4 flex text-left">
              <img
                src="/Img-Research/ethic.svg"
                alt="Brain Icon"
                className="w-20 h-20"
              />
            </div>
            <p className="text-left text-xl font-medium">Ethical:</p>
            <p className="text-left text-xl">
              COMPOSE in its works always holds the highest ethical standard and
              does not condone any behaviour that is dishonest, untrustworthy,
              degrading or endangering others, or outright criminal.
            </p>
          </div>
          <div>
            <div>
              <div className="mb-4 flex text-left">
                <img
                  src="/Img-AboutFaculty/World.svg"
                  alt="People Icon"
                  className="w-20 h-20"
                />
              </div>
              <p className="text-left text-xl font-medium">Relevant:</p>
              <p className="text-left text-xl">
                COMPOSE works on issues and problems that are relevant to the
                future development of Muslim politics and world society.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
