export default function VisionMision() {
  return (
    <section className="py-14 px-8 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 text-brandNavy">
        <div>
          <h2 className="text-5xl font-medium flex items-center gap-2">
            <img
              src="/Img-AboutFaculty/Eye.svg"
              alt="Eye Icon"
              className="w-8 h-8"
            />
            Vision
          </h2>
          <p className="mt-6 text-xl">
            To be a leading reference center in social studies and strategic
            policy.
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
              To provide world-class education and teaching in social sciences.
            </li>
            <li>
              To conduct outstanding research on social, political, and
              strategic issues facing the world, Muslim societies, and
              Muslim-majority countries.
            </li>
            <li>
              To contribute innovative thinking in the formulation of policies
              related to strategic social-political issues facing the world,
              Muslim societies, and Muslim-majority countries.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
