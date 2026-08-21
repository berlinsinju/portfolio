import profileImage from "./assets/sinju.png";

function AboutMe() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#fcf7f0] text-gray-900">
      <main
        id="about"
        className="mx-auto max-w-7xl px-6 pb-24 pt-14 sm:px-10 sm:pt-20 md:pb-32 md:pt-24"
      >
        {/* =====================================================
            TOP
        ====================================================== */}

        <section className="relative">
          {/* Badge */}

          <div className="inline-block -rotate-3 bg-[#F0705A] px-5 py-2.5 shadow-[5px_5px_0px_rgba(0,0,0,0.07)] sm:px-6 sm:py-3">
            <span className="text-xl font-extrabold uppercase tracking-wide text-white sm:text-2xl">
              About Me
            </span>
          </div>

          {/* Decorative Circle */}

          <div className="absolute right-2 top-1 hidden h-14 w-14 rounded-full border-2 border-gray-900 md:block lg:right-8">
            <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F0705A]" />
          </div>

          {/* Heading */}

          <h1 className="mt-9 max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-8xl">
            A little bit
            <br />
            <span className="italic text-purple-500">about me.</span>
          </h1>
        </section>

        {/* =====================================================
            ABOUT CONTENT
        ====================================================== */}

        <section className="mt-14 sm:mt-16 md:mt-20">
          <div className="grid items-start gap-10 md:grid-cols-[150px_1fr] md:gap-12 lg:grid-cols-[190px_1fr] lg:gap-16">
            {/* =================================================
                LEFT SIDE
            ================================================== */}

            <div className="flex flex-col items-center md:items-start">
              {/* Profile Image */}

              <div
                className="relative transition-transform duration-300 ease-out"
                style={{ transform: "rotate(-3deg)" }}
              >
                {/* Outer Ring */}

                <div className="relative h-28 w-28 rounded-full border-2 border-gray-900 bg-[#F0705A] p-1.5 shadow-[5px_5px_0px_rgba(0,0,0,0.08)] sm:h-32 sm:w-32">
                  {/* Image */}

                  <img
                    src={profileImage}
                    alt="Sinju"
                    className="h-full w-full rounded-full object-cover"
                  />

                  {/* Small Dot */}

                  <span className="absolute -right-1 top-3 h-4 w-4 rounded-full border-2 border-gray-900 bg-purple-500" />
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT SIDE
            ================================================== */}

            <div className="max-w-4xl">
              <p className="text-2xl font-medium leading-[1.35] sm:text-3xl md:text-4xl lg:text-[2.65rem]">
                I'm <span className="font-black">Berlin Sinju Godfree</span> — a
                react developer who enjoys turning ideas into clean, responsive
                and meaningful digital experiences.
              </p>

              <p className="mt-7 max-w-3xl text-base leading-7 text-gray-700 sm:mt-8 sm:text-lg sm:leading-8 md:text-xl">
                I started my journey in frontend development by building
                websites and gradually found myself drawn to creating interfaces
                that feel simple, intuitive and enjoyable to use. Today, I work
                primarily with React and modern web technologies, while
                continuing to learn, experiment and grow with every project I
                build.
              </p>

              <p className="mt-5 max-w-3xl text-base leading-7 text-gray-700 sm:mt-6 sm:text-lg sm:leading-8 md:text-xl">
                For me, development isn't only about writing code. It's about
                understanding the idea behind a product, paying attention to the
                little details and creating something that people can actually
                enjoy using.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            PERSONAL NOTE
        ====================================================== */}

        <section className="mt-20 border-t-2 border-gray-900 pt-10 sm:mt-24 md:mt-32 md:pt-12">
          <div className="grid gap-7 md:grid-cols-[150px_1fr] md:gap-12 lg:grid-cols-[190px_1fr] lg:gap-16">
            {/* Label */}

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">
                A little note
              </span>
            </div>

            {/* Quote */}

            <div className="max-w-4xl">
              <p className="text-2xl font-bold leading-[1.2] sm:text-3xl md:text-4xl lg:text-5xl">
                “I like creating things that are{" "}
                <span className="text-[#F0705A]">simple, useful</span> and have
                a little bit of personality.”
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <section className="mt-20 flex flex-col gap-10 border-t border-gray-300 pt-8 sm:mt-24 sm:flex-row sm:items-end sm:justify-between md:mt-28">
          {/* Current */}

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Currently
            </p>

            <p className="mt-2 text-base font-bold sm:text-lg">
              Learning · Building · Exploring
            </p>
          </div>

          {/* Decorative Typography */}

          <div className="text-left sm:text-right">
            <p className="text-5xl font-black leading-[0.85] tracking-[-0.06em] sm:text-6xl md:text-7xl">
              KEEP
              <br />
              CREATING
              <span className="text-[#F0705A]">.</span>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AboutMe;
