"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link"; // ← added for company link

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
        <div className="order-2 lg:order-1 space-y-7">
          <h2 className="text-[#16f2b3] text-xl font-semibold uppercase tracking-widest">
            Who AM I?
          </h2>

          <div className="text-gray-200 text-base lg:text-lg leading-relaxed space-y-5">
            <p>
              I&apos;m{" "}
              <span className="text-purple-400 font-bold">Tufayel Ahmed</span> —
              Founder & CEO of{" "}
              <strong className="text-blue-700 underline font-bold">
                <Link
                  href="https://famous-it-solutions.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  Famous IT Solutions
                </Link>
              </strong>
              , and a passionate Full-Stack Developer...
            </p>

            <p>
              With a vision to empower businesses through technology, I founded
              Famous IT Solutions to deliver end-to-end solutions — from modern
              web & mobile applications to SEO, digital marketing, UI/UX design,
              and cyber security. What started as a drive to solve real problems
              has grown into a trusted partner for clients seeking growth and
              innovation.
            </p>

            <p>
              As a developer at heart, I specialize in{" "}
              <strong className="text-pink-400">
                React, Next.js, TypeScript, Tailwind CSS
              </strong>{" "}
              for pixel-perfect, performant frontends, and{" "}
              <strong className="text-green-400">
                Node.js, Express, MongoDB
              </strong>{" "}
              (plus modern APIs & automation) for robust, scalable backends.
            </p>

            <p>
              Clean code, fast performance, intuitive UX, and measurable
              business results — these are the standards I uphold in every
              project, whether I&apos;m coding personally or leading the team.
            </p>

            <p className="text-purple-300 font-medium italic">
              Building the future of digital experiences — one strategic
              solution and clean line of code at a time.
            </p>
          </div>

          {/* Skill Pills – expanded for founder + dev credibility */}
          <div className="flex flex-wrap gap-3 pt-5">
            {[
              "Founder & CEO",
              "Full-Stack Development",
              "React & Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Node.js & Express",
              "MongoDB",
              "SEO & Digital Marketing",
              "UI/UX Design",
              "Git & Modern Workflows",
            ].map((skill) => (
              <span
                key={skill}
                className="px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-500/30 text-purple-200 rounded-full shadow-md backdrop-blur-sm hover:border-purple-400 hover:scale-105 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Optional company CTA */}
          <div className="pt-4">
            <Link
              href="https://famous-it-solutions.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#16f2b3] hover:text-[#13d9a1] font-medium transition-colors"
            >
              Discover Famous IT Solutions →
            </Link>
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
                src={personalData.profil || "/Ceo-img.jpeg"}
                width={420}
                height={420}
                alt="Tufayel Ahmed — Founder & CEO @ Famous IT Solutions | Full-Stack Developer"
                className="rounded-full object-cover border-4 border-gray-800 shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:border-purple-500"
                priority
              />

              {/* Animated Border Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-1">
                <div className="w-full h-full rounded-full bg-gray-950"></div>
              </div>

              {/* Floating Particles Effect */}
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
