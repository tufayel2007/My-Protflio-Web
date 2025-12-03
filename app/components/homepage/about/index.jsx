"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-24 relative">
      {/* Vertical "ABOUT ME" Label - Desktop */}
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] text-white rotate-90 px-6 py-3 text-xl font-bold rounded-md shadow-lg">
          ABOUT ME
        </span>
        <span className="h-40 w-0.5 bg-[#1a1443] mt-6"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto px-4 lg:px-0">
        {/* Text Content */}
        <div className="order-2 lg:order-1 space-y-6">
          <h2 className="text-[#16f2b3] text-xl font-semibold uppercase tracking-widest">
            Who I Am?
          </h2>

          <div className="text-gray-200 text-base lg:text-lg leading-relaxed space-y-5">
            <p>
              Hi,I&apos;m
              <span className="text-purple-400 font-bold">Tufayel Ahmed</span> —
              a passionate{" "}
              <span className="font-bold text-pink-400">
                FullStack Developer
              </span>{" "}
              who turns ideas into stunning, high-performance web experiences.
            </p>

            <p>
              I specialize in modern technologies like{" "}
              <strong className="text-cyan-400">
                React, Next.js, TypeScript, TailwindCSS
              </strong>{" "}
              on the frontend and{" "}
              <strong className="text-green-400">
                Node.js, Express, MongoDB
              </strong>{" "}
              on the backend.
            </p>

            <p>
              Clean architecture, pixel-perfect UI, lightning-fast performance,
              and delightful user experience — these are not just goals, they're
              my standard.
            </p>

            <p className="text-purple-300 font-medium">
              Currently building the future of web, one clean line of code at a
              time.
            </p>
          </div>

          {/* Skill Pills */}
          <div className="flex flex-wrap gap-3 pt-4">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind",
              "Node.js",
              "MongoDB",
              "Git",
            ].map((skill) => (
              <span
                key={skill}
                className="px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-500/30 text-purple-200 rounded-full shadow-md backdrop-blur-sm hover:border-purple-400 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Profile Image with Glow + Hover Magic */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative group cursor-pointer">
            {/* Outer Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>

            {/* Main Image Container */}
            <div className="relative">
              <Image
                src={personalData.profile || "/MyProfileNabbr.jpeg"}
                width={420}
                height={420}
                alt="Tufayel Ahmed - FullStack Developer"
                className="rounded-full object-cover border-4 border-gray-800 shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:border-purple-500"
                priority
              />

              {/* Animated Border Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-1">
                <div className="w-full h-full rounded-full bg-gray-950"></div>
              </div>

              {/* Floating Particles Effect (Optional) */}
              <div className="absolute inset-0 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute top-10 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-20 right-8 w-3 h-3 bg-pink-400 rounded-full animate-ping delay-300"></div>
                <div className="absolute top-32 right-12 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
