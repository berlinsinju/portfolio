import { useEffect, useRef, useState } from "react";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaBootstrap,
  FaSass,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiVite,
  SiJest,
  SiStorybook,
  SiAxios,
  SiEslint,
  SiPrettier,
  SiFramer,
} from "react-icons/si";

/* =========================
   Eye Component
========================= */

function Eye({ mousePosition }) {
  const eyeRef = useRef(null);

  const getPupilStyle = () => {
    if (!eyeRef.current) {
      return {};
    }

    const eye = eyeRef.current.getBoundingClientRect();

    // Center of the eye
    const eyeCenterX = eye.left + eye.width / 2;
    const eyeCenterY = eye.top + eye.height / 2;

    // Distance between cursor and eye center
    const deltaX = mousePosition.x - eyeCenterX;
    const deltaY = mousePosition.y - eyeCenterY;

    // Direction toward cursor
    const angle = Math.atan2(deltaY, deltaX);

    // Distance from cursor
    const cursorDistance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    // Maximum pupil movement
    const maxDistance = 8;

    // Smooth limited movement
    const distance = Math.min(maxDistance, cursorDistance / 30);

    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    return {
      transform: `translate(${x}px, ${y}px)`,
    };
  };

  return (
    <span
      ref={eyeRef}
      className="
        relative
        inline-flex
        items-center
        justify-center
        h-9 w-9
        sm:h-11 sm:w-11
        rounded-full
        bg-white
        border-2
        border-gray-900
        overflow-hidden
      "
    >
      {/* Pupil */}
      <span
        className="
          h-3 w-3
          sm:h-4 sm:w-4
          rounded-full
          bg-gray-900
          transition-transform
          duration-100
          ease-out
        "
        style={getPupilStyle()}
      />

      {/* Eye Shine */}
      <span
        className="
          absolute
          top-[20%]
          left-[23%]
          h-1.5
          w-1.5
          rounded-full
          bg-white
          pointer-events-none
        "
      />
    </span>
  );
}

/* =========================
   Portfolio Hero
========================= */

function PortfolioHero() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  /* =========================
     Mouse Tracking
  ========================= */

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  /* =========================
     Skills
  ========================= */

  const skills = [
    {
      name: "React",
      icon: <FaReact />,
      bg: "bg-[#61DAFB]",
      iconColor: "text-[#20232A]",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      bg: "bg-[#F7DF1E]",
      iconColor: "text-[#20232A]",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      bg: "bg-[#3178C6]",
      iconColor: "text-white",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      bg: "bg-[#E34F26]",
      iconColor: "text-white",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      bg: "bg-[#1572B6]",
      iconColor: "text-white",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      bg: "bg-[#E6F9FC]",
      iconColor: "text-[#06B6D4]",
    },
    {
      name: "Redux",
      icon: <SiRedux />,
      bg: "bg-[#764ABC]",
      iconColor: "text-white",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      bg: "bg-black",
      iconColor: "text-white",
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap />,
      bg: "bg-[#EDE7F6]",
      iconColor: "text-[#7952B3]",
    },
    {
      name: "Sass",
      icon: <FaSass />,
      bg: "bg-[#F6E7EE]",
      iconColor: "text-[#CC6699]",
    },
    {
      name: "Vite",
      icon: <SiVite />,
      bg: "bg-[#EEE9FF]",
      iconColor: "text-[#646CFF]",
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      bg: "bg-[#FBE9E5]",
      iconColor: "text-[#F05032]",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      bg: "bg-[#EEEEEE]",
      iconColor: "text-black",
    },
    {
      name: "npm",
      icon: <FaNpm />,
      bg: "bg-[#FFF0F0]",
      iconColor: "text-[#CB3837]",
    },
    {
      name: "Axios",
      icon: <SiAxios />,
      bg: "bg-[#EEF4FF]",
      iconColor: "text-[#5A29E4]",
    },
    {
      name: "Jest",
      icon: <SiJest />,
      bg: "bg-[#F7E9ED]",
      iconColor: "text-[#C21325]",
    },
    {
      name: "Storybook",
      icon: <SiStorybook />,
      bg: "bg-[#FFF0F5]",
      iconColor: "text-[#FF4785]",
    },
    {
      name: "ESLint",
      icon: <SiEslint />,
      bg: "bg-[#F0EEFF]",
      iconColor: "text-[#4B32C3]",
    },
    {
      name: "Prettier",
      icon: <SiPrettier />,
      bg: "bg-[#EAF8FF]",
      iconColor: "text-[#56B3B4]",
    },
    {
      name: "Framer Motion",
      icon: <SiFramer />,
      bg: "bg-black",
      iconColor: "text-white",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      bg: "bg-[#EFF8EC]",
      iconColor: "text-[#339933]",
    },
  ];

  return (
    <div className="overflow-hidden bg-[#fcf7f0] text-gray-900 pt-10">
      <main
        id="home"
        className="max-w-7xl mx-auto px-6 sm:px-10 pt-6 sm:pt-10 pb-16"
      >
        {/* ================= HERO CONTENT ================= */}

        <div className="w-full">
          {/* Badge */}
          <div className="inline-block -rotate-3 bg-[#F0705A] px-6 py-3 shadow-[6px_6px_0px_rgba(0,0,0,0.06)]">
            <span className="block text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-none whitespace-nowrap">
              Hey, I'm
            </span>
          </div>

          {/* ================= NAME ================= */}

          <h1 className="mt-4 flex items-center gap-3 text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 tracking-tight">
            SINJU
            {/* ================= EYES ================= */}
            <span className="inline-flex items-center gap-1" aria-hidden="true">
              <Eye mousePosition={mousePosition} />

              <Eye mousePosition={mousePosition} />
            </span>
          </h1>

          {/* ================= TAGLINE ================= */}

          <p className="mt-6 w-full max-w-5xl text-xl sm:text-2xl text-gray-900 leading-snug">
            I am a{" "}
            <span className="italic font-bold text-purple-500">
              React Developer
            </span>{" "}
            specializing in building responsive, scalable, and user-friendly web
            applications with modern frontend technologies.
          </p>
        </div>

        {/* ================= SKILLS MARQUEE ================= */}

        <div id="skills" className="mt-12 w-full overflow-hidden">
          <div className="relative py-2">
            {/* Left Fade */}
            <div
              className="
                absolute
                left-0
                top-0
                bottom-0
                w-16
                sm:w-24
                bg-gradient-to-r
                from-[#F8F7F3]
                to-transparent
                z-10
                pointer-events-none
              "
            />

            {/* Right Fade */}
            <div
              className="
                absolute
                right-0
                top-0
                bottom-0
                w-16
                sm:w-24
                bg-gradient-to-l
                from-[#F8F7F3]
                to-transparent
                z-10
                pointer-events-none
              "
            />

            {/* ================= MARQUEE ================= */}

            <div className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused]">
              {/* First Set */}
              {skills.map((skill, index) => (
                <div
                  key={`first-${index}`}
                  title={skill.name}
                  className={`
                    group
                    h-20 w-20
                    sm:h-24 sm:w-24
                    shrink-0
                    rounded-2xl
                    ${skill.bg}
                    flex
                    items-center
                    justify-center
                    shadow-sm
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:-rotate-3
                    cursor-pointer
                  `}
                >
                  <div
                    className={`
                      ${skill.iconColor}
                      text-4xl
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    `}
                  >
                    {skill.icon}
                  </div>
                </div>
              ))}

              {/* Duplicate Set */}
              {skills.map((skill, index) => (
                <div
                  key={`second-${index}`}
                  title={skill.name}
                  className={`
                    group
                    h-20 w-20
                    sm:h-24 sm:w-24
                    shrink-0
                    rounded-2xl
                    ${skill.bg}
                    flex
                    items-center
                    justify-center
                    shadow-sm
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:-rotate-3
                    cursor-pointer
                  `}
                >
                  <div
                    className={`
                      ${skill.iconColor}
                      text-4xl
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    `}
                  >
                    {skill.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PortfolioHero;
