// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import experience from "../../../assets/lottie/code.json";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Experience() {
  return (
    <div
      id="experience"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {experiences.map((experience) => (
                <GlowCard
                  key={experience.id}
                  identifier={`experience-${experience.id}`}
                >
                  <div className="p-3 relative">
                    <Image
                      src="/blur-23.svg"
                      alt=""
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80 pointer-events-none"
                    />
                    <div className="relative z-10">
                      <div className="flex justify-center mb-4">
                        <p className="text-xs sm:text-sm text-[#16f2b3] font-medium">
                          {experience.duration}
                        </p>
                      </div>

                      <div className="flex items-start gap-x-6 px-3">
                        <div className="text-violet-500 transition-all duration-300 hover:scale-125 flex-shrink-0">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl font-semibold uppercase mb-1">
                            {experience.title}
                          </h3>
                          <p className="text-base mb-3">{experience.company}</p>

                          {experience.companyVisitLink?.trim() && (
                            <a
                              href={experience.companyVisitLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block mt-1 px-5 py-2 text-sm sm:text-base 
                       bg-[#16f2b3] text-black font-medium rounded-md 
                       hover:bg-[#13d9a1] transition-all duration-300"
                            >
                              Visit Website →
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
