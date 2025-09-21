// "use client";

// export default function Students() {
//   const studentList = [
//     {
//       image: "/Img-People/student1.png",
//       name: "Nouha Khelfa",
//       position: "Ph.D. Student in Political Science",
//       href: "/people/annisa-nurhaliza",
//     },
//     {
//       image: "/Img-People/student2.png",
//       name: "Wafa Hussain",
//       position: "Ph.D. Student in Political Science",
//       href: "/people/fajar-ramadhan",
//     },
//     {
//       image: "/Img-People/student3.png",
//       name: "Arafat Kostanian",
//       position: "Ph.D. Student in Political Science",
//       href: "/people/siti-kurniawati",
//     },
//     {
//       image: "/Img-People/student4.png",
//       name: "Ismail Alviano",
//       position: "Ph.D. Student in Political Science",
//       href: "/people/ahmad-syahputra",
//     },
//   ];

//   return (
//     <section className="py-16 px-8 bg-white">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-5xl font-medium flex gap-2 text-brandNavy mb-2">
//           Students
//         </h2>
//         <h3 className="text-3xl text-[#4C839E] flex gap-2 text-brandNavy mb-8">
//           PhD in Political Science
//         </h3>
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {studentList.map((student, index) => (
//             <a key={index} href={student.href}>
//               <div className="bg-white rounded-xl shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
//                 <img
//                   src={student.image}
//                   alt={student.name}
//                   className="w-full aspect-[4/4] object-cover object-top rounded-t-xl"
//                 />
//                 <div className="h-[90px] text-left px-5 py-3">
//                   <h3 className="text-base font-medium">{student.name}</h3>
//                   <p className="text-sm text-[#00748D]">{student.position}</p>
//                 </div>
//               </div>
//             </a>
//           ))}
//         </div>
//         <div className="flex justify-center mt-8">
//           <button className="px-4 py-2 bg-brandNavy text-white font-light rounded-lg hover:bg-[#005c74] transition shadow-md">
//             See More
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// // import PeopleCard from "./PeopleCard";

// // export default function Students() {
// //   return (
// //     <section className="py-16 px-8 bg-white bg-white">
// //       <div className="max-w-6xl mx-auto">
// //         <h2 className="text-5xl font-medium flex gap-2 text-brandNavy mb-2">
// //           Students
// //         </h2>
// //         <h3 className="text-3xl text-[#4C839E] flex gap-2 text-brandNavy mb-8">
// //           PhD in Political Science
// //         </h3>
// //         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //           <PeopleCard />
// //           <PeopleCard />
// //           <PeopleCard />
// //           <PeopleCard />
// //         </div>
// //         <div className="flex justify-center mt-8">
// //           <button className="px-4 py-2 bg-brandNavy text-white font-light rounded-lg hover:bg-[#005c74] transition shadow-md">
// //             See More
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// app/(frontend)/components/people/Students.tsx
import PeopleCard from "./PeopleCard";
import { getPeopleByGroup } from "@/(frontend)/lib/payload-people";

export const revalidate = 300;

export default async function Students() {
  const students = await getPeopleByGroup("student");
  const phd = students.filter((s) => s.program === "phd-political-science"); // sesuaikan program

  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-medium text-brandNavy mb-2">Students</h2>
        <h3 className="text-3xl text-[#4C839E] mb-8">
          PhD in Political Science
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {phd.map((s) => (
            <PeopleCard
              key={s.id}
              href={`/people/${s.slug}`}
              image={s.photo?.sizes?.card?.url ?? s.photo?.url}
              alt={s.photo?.alt ?? s.name}
              name={s.name}
              position={s.position}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
