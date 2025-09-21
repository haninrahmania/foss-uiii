// export default function Header() {
//   return (
//     <section className="relative">
//       {/* Ini Gradient */}
//       <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-[#01395E]/100 to-[#01395E]/0">
//         <div className="absolute inset-0 flex flex-col justify-center px-14 text-white mt-16">
//           <h1 className="text-7xl font-medium mb-4 text-center ">
//             Center of Muslim <br /> Politics and World Society
//           </h1>
//         </div>
//       </div>
//       <img
//         src="/Img-Research/cover-compose.jpg"
//         alt="COMPOSE UIII"
//         className="w-full h-[570px] object-cover"
//       />
//     </section>
//   );
// }

// app/(frontend)/components/research-and-publication/Header.tsx
type Props = {
  title?: string;
  background?: string;
};

export default function Header({ title, background }: Props) {
  return (
    <section className="relative">
      <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-[#01395E]/100 to-[#01395E]/0">
        <div className="absolute inset-0 flex flex-col justify-center px-14 text-white mt-16">
          <h1 className="text-7xl font-medium mb-4 text-center ">
            {title ?? (
              <>
                Center&nbsp;of&nbsp;Muslim <br /> Politics&nbsp;and&nbsp;World
                Society
              </>
            )}
          </h1>
        </div>
      </div>
      <img
        src={background ?? "/Img-Research/cover-compose.jpg"}
        alt="COMPOSE UIII"
        className="w-full h-[570px] object-cover"
      />
    </section>
  );
}
