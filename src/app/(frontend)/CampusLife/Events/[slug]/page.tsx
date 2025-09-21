import Image from "next/image";
import NavBar from "@/(frontend)/components/Navbar";
import Footer from "@/(frontend)/components/Footer";

interface Event {
  id: string;
  title: string;
  description: { root: any }; // Lexical JSON
  eventDate: string;
  eventTime: string;
  location: string;
  registerLink?: string;
  image?: {
    url: string;
    alt?: string;
  };
  slug: string;
}

async function getEvent(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/events?where[slug][equals]=${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data.docs?.[0] || null; // Payload always returns { docs: [...] }
}

export default async function DetailedEventPage({
  params,
}: {
  params: { slug: string };
}) {
  const event = await getEvent(params.slug);

  if (!event) {
    return (
      <div>
        <NavBar />
        <div className="p-10 text-center">Event not found</div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="w-full relative">
      <NavBar />

      <section className="py-5 bg-white-50 mb-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-medium text-sky-950">{event.title}</h2>

          <div className="flex flex-col lg:flex-row mt-8">
            <div className="w-full lg:w-2/3 pr-8">
              <p className="text-gray-600">{event.eventDate}</p>
              <p className="text-gray-600">{event.eventTime}</p>
              <p className="text-gray-600">{event.location}</p>

              <div className="mt-6 text-lg text-gray-700">
                <pre>{JSON.stringify(event.description, null, 2)}</pre>
              </div>

              {event.registerLink && (
                <a
                  href={event.registerLink}
                  className="inline-block mt-6 px-8 py-3 bg-brandNavy text-white rounded-lg hover:bg-[#005c74]"
                >
                  Register
                </a>
              )}
            </div>

            {event.image?.url && (
              <div className="w-full lg:w-1/3">
                <Image
                  src={event.image.url}
                  alt={event.image.alt || event.title}
                  width={500}
                  height={500}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
