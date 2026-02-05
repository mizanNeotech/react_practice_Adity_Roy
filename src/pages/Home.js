const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 via-sky-200 to-white">
      
      {/* HERO SECTION */}
      <section className="flex items-center justify-center text-center px-6 min-h-[calc(100vh-6rem)]">
        <div className="max-w-4xl">

          {/* Top Badge */}
          <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-md px-4 py-2 rounded-full shadow-md mb-8 mx-auto">
            <span className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
              Join
            </span>
            <span className="text-sm text-gray-700">
              Monitor key performance metrics
            </span>

            <div className="flex -space-x-2">
             
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            All-in-One Dashboard <br />
            for High Performing Teams
          </h1>

          {/* Subtitle */}
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            From daily to-dos to complex project roadmaps, manage everything in
            one place with powerful integrations, automation, and real-time
            collaboration.
          </p>

          {/* CTA */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition">
            Join beta test
          </button>

        </div>
      </section>
    </div>
  );
};

export default Home;


