// import Image from "next/image";
// import Link from "next/link";
// import NavBar from "@/(frontend)/components/Navbar";
// import Footer from "@/(frontend)/components/Footer";

// // Utility: konversi "Dec 20" jadi objek Date di tahun sekarang
// function parseDate(dateStr) {
//   const currentYear = new Date().getFullYear();
//   const [monthStr, dayStr] = dateStr.split(" ");
//   const monthMap = {
//     Jan: 0,
//     Feb: 1,
//     Mar: 2,
//     Apr: 3,
//     May: 4,
//     Jun: 5,
//     Jul: 6,
//     Aug: 7,
//     Sep: 8,
//     Oct: 9,
//     Nov: 10,
//     Dec: 11,
//   };
//   let month = monthMap[monthStr];
//   let day = parseInt(dayStr, 10);

//   // Jika bulan Januari tapi sekarang Desember, anggap tahun berikutnya (event upcoming awal tahun depan)
//   const now = new Date();
//   let year = currentYear;
//   if (month === 0 && now.getMonth() === 11) {
//     year = currentYear + 1;
//   }

//   return new Date(year, month, day);
// }

// export default function Events() {
//   const events = [
//     {
//       id: 1,
//       date: "Jan 05",
//       title: "Series Brownbag 40 with Amin Mudzakkir",
//       image: "/campus_life/Brownbag-40.png",
//       description:
//         "The first Brownbag Series in 2024! <br/> Join us for our 40th Brownbag Series. In this engaging discussion, we’ll delve into how Islamic feminism’s intersection with the political economy in Indonesia is reshaping the conventional split between the politics of recognition and redistribution. <br/> This session, titled ‘The Paradox of Feminism in Indonesia:Political Economy, Muslim Piety, and Authority,’ will feature Amin Mudzakkir, our COMPOSE fellow and a researcher at PRW BRIN, Indonesia.",
//     },
//     {
//       id: 2,
//       date: "Dec 28",
//       title: "Diseminasi Hasil Awal Penelitian Riset Jabar",
//       image: "/campus_life/event2.png",
//     },
//     {
//       id: 3,
//       date: "Dec 20",
//       title: "Series Brownbag 39 with Muhammad Syukri",
//       image: "/campus_life/event3.png",
//     },
//     {
//       id: 4,
//       date: "Dec 15",
//       title: "Series Brownbag 38 with Fathun Karib",
//       image: "/campus_life/event4.png",
//     },
//     {
//       id: 5,
//       date: "Dec 14",
//       title: "The First Climate Talk with Michiel Schaeffer",
//       image: "/campus_life/event5.svg",
//     },
//     {
//       id: 6,
//       date: "Dec 13",
//       title: "Series Brownbag 37 with Nathanael G. Sumaktoyo",
//       image: "/campus_life/event6.png",
//     },
//     {
//       id: 7,
//       date: "Dec 08",
//       title: "Series Brownbag 36 with Aizat bin Khairi",
//       image: "/campus_life/event7.png",
//     },
//     {
//       id: 8,
//       date: "Dec 06",
//       title: "Series Brownbag 35 with Arya Budi",
//       image: "/campus_life/event8.png",
//     },
//     {
//       id: 9,
//       date: "Dec 01",
//       title: "Series Brownbag 34 with Okky Madasari",
//       image: "/campus_life/event9.png",
//     },
//   ];

//   const now = new Date();

//   // Pisahkan events berdasarkan tanggal
//   const upcomingEvents = events.filter((event) => parseDate(event.date) >= now);
//   const pastEvents = events.filter((event) => parseDate(event.date) < now);

//   // Komponen rendering card event
//   const EventCard = ({ event }) => (
//     <Link
//       key={event.id}
//       href={`/CampusLife/Events/DetailedEvents/${event.id}`}
//       className="block"
//     >
//       <div
//         className="rounded-2xl shadow-2xl overflow-hidden border border-gray-300 mb-8 transition-shadow duration-300 hover:shadow-[0px_4px_10px_rgba(0,116,141,0.5)]"
//         style={{
//           backgroundColor: "#F4FDFF",
//           width: "100%",
//           maxWidth: "600px",
//           margin: "0 auto",
//           display: "flex",
//           flexDirection: "column",
//           height: "450px",
//         }}
//       >
//         <div className="flex w-full">
//           {/* Left Date Section */}
//           <div className="w-1/3 p-6 flex justify-center items-start">
//             <div className="flex flex-col items-start justify-start pl-2">
//               <p className="text-4xl font-bold font-['Halyard_Display'] text-[#00748D]">
//                 {event.date.split(" ")[0]}
//               </p>
//               <p className="text-3xl font-bold font-['Halyard_Display'] text-sky-950 mt-1">
//                 {event.date.split(" ")[1]}
//               </p>
//             </div>
//           </div>

//           {/* Right Image Section */}
//           <div className="relative mt-6 ml-6 w-[200px] h-[250px]">
//             {/* Perbaikan disini: */}
//             <Image
//               src={event.image}
//               alt={`Event ${event.id}`}
//               fill
//               style={{ objectFit: "cover", objectPosition: "center" }}
//             />
//           </div>
//         </div>

//         {/* Text Section Below Image */}
//         <div className="p-6 flex-grow">
//           <h3 className="text-xl font-medium font-['Halyard_Display'] text-sky-950 mt-2">
//             {event.title}
//           </h3>
//         </div>
//       </div>
//     </Link>
//   );

//   return (
//     <div className="w-full">
//       <header>
//         <NavBar />
//       </header>

//       {/* Hero Section */}
//       <section className="py-4 bg-white-50">
//         <div className="text-center text-black px-4 py-8">
//           <h1 className="text-7xl font-medium font-['Halyard_Display'] text-sky-950">
//             Events
//           </h1>
//         </div>
//       </section>

//       {/* Upcoming Events Section */}
//       <section className="py-5 bg-white-50 mb-16">
//         <div className="pl-32">
//           <h2 className="text-4xl font-medium font-['Halyard_Display'] text-sky-950 mt-4">
//             Upcoming Events
//           </h2>
//           <p className="text-lg font-['Halyard_Display'] text-sky-950 mt-4">
//             See upcoming events from UIII
//           </p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mx-auto max-w-7xl px-4 mt-6">
//           {upcomingEvents.length > 0 ? (
//             upcomingEvents.map((event) => (
//               <EventCard key={event.id} event={event} />
//             ))
//           ) : (
//             <p className="text-center text-gray-500 col-span-full">
//               No upcoming events
//             </p>
//           )}
//         </div>
//       </section>

//       {/* Past Events Section */}
//       <section className="py-5 bg-white-50 mb-16">
//         <div className="pl-32">
//           <h2 className="text-4xl font-medium font-['Halyard_Display'] text-sky-950 mt-4">
//             Past Events
//           </h2>
//           <p className="text-lg font-['Halyard_Display'] text-sky-950 mt-4">
//             See past events from UIII
//           </p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mx-auto max-w-7xl px-4 mt-6">
//           {pastEvents.length > 0 ? (
//             pastEvents.map((event) => (
//               <EventCard key={event.id} event={event} />
//             ))
//           ) : (
//             <p className="text-center text-gray-500 col-span-full">
//               No past events
//             </p>
//           )}
//         </div>
//       </section>

//       <footer>
//         <Footer />
//       </footer>
//     </div>
//   );
// }

export const dynamic = "force-dynamic";
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/(frontend)/components/Navbar";
import Footer from "@/(frontend)/components/Footer";

async function getEvents() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/events?limit=100&sort=-eventDate`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch events");
  }
  return res.json();
}

export default async function Events() {
  const data = await getEvents();
  const events = data.docs || [];

  const now = new Date();

  const upcomingEvents = events.filter(
    (event) => new Date(event.eventDate) >= now && event.isActive
  );
  const pastEvents = events.filter(
    (event) => new Date(event.eventDate) < now && event.isActive
  );

  const EventCard = ({ event }) => (
    <Link
      key={event.id}
      href={`/CampusLife/Events/DetailedEvents/${event.slug}`}
      className="block"
    >
      <div
        className="rounded-2xl shadow-2xl overflow-hidden border border-gray-300 mb-8 transition-shadow duration-300 hover:shadow-[0px_4px_10px_rgba(0,116,141,0.5)]"
        style={{
          backgroundColor: "#F4FDFF",
          width: "100%",
          maxWidth: "600px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          height: "450px",
        }}
      >
        <div className="flex w-full">
          {/* Left Date Section */}
          <div className="w-1/3 p-6 flex justify-center items-start">
            <div className="flex flex-col items-start justify-start pl-2">
              <p className="text-4xl font-bold font-['Halyard_Display'] text-[#00748D]">
                {new Date(event.eventDate).toLocaleString("en-US", {
                  month: "short",
                })}
              </p>
              <p className="text-3xl font-bold font-['Halyard_Display'] text-sky-950 mt-1">
                {new Date(event.eventDate).getDate()}
              </p>
            </div>
          </div>

          {/* Right Image Section */}
          {event.image && (
            <div className="relative mt-6 ml-6 w-[200px] h-[250px]">
              <Image
                src={
                  typeof event.image === "string"
                    ? event.image
                    : event.image.url // Payload returns full object if populated
                }
                alt={event.title}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          )}
        </div>

        {/* Text Section Below Image */}
        <div className="p-6 flex-grow">
          <h3 className="text-xl font-medium font-['Halyard_Display'] text-sky-950 mt-2">
            {event.title}
          </h3>
          {event.location && (
            <p className="text-sm text-gray-600 mt-2">{event.location}</p>
          )}
        </div>
      </div>
    </Link>
  );

  return (
    <div className="w-full">
      <header>
        <NavBar />
      </header>

      {/* Hero Section */}
      <section className="py-4 bg-white-50">
        <div className="text-center text-black px-4 py-8">
          <h1 className="text-7xl font-medium font-['Halyard_Display'] text-sky-950">
            Events
          </h1>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-5 bg-white-50 mb-16">
        <div className="pl-32">
          <h2 className="text-4xl font-medium font-['Halyard_Display'] text-sky-950 mt-4">
            Upcoming Events
          </h2>
          <p className="text-lg font-['Halyard_Display'] text-sky-950 mt-4">
            See upcoming events from UIII
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mx-auto max-w-7xl px-4 mt-6">
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map((event) => <EventCard key={event.id} event={event} />)
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No upcoming events
            </p>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section className="py-5 bg-white-50 mb-16">
        <div className="pl-32">
          <h2 className="text-4xl font-medium font-['Halyard_Display'] text-sky-950 mt-4">
            Past Events
          </h2>
          <p className="text-lg font-['Halyard_Display'] text-sky-950 mt-4">
            See past events from UIII
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mx-auto max-w-7xl px-4 mt-6">
          {pastEvents.length > 0 ? (
            pastEvents.map((event) => <EventCard key={event.id} event={event} />)
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No past events
            </p>
          )}
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
