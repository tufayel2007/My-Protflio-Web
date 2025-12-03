"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  ExternalLink,
  Github,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const ProjectCard = ({ project }) => {
  const [copied, setCopied] = useState(false);
  const [showFullDesc, setShowFullDesc] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(project.demo || project.code || "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleDescription = () => setShowFullDesc(!showFullDesc);

  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      perspective={1000}
      scale={1.03}
      transitionSpeed={1800}
      className="w-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="group relative h-full"
      >
        <div className="h-full rounded-2xl overflow-hidden bg-gray-900/70 backdrop-blur-xl border border-white/10 transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-600/20">
          {/* Image */}
          <div className="relative overflow-hidden">
            <img
              src={project.image || "/images/fallback.jpg"}
              alt={project.name}
              className="w-full h-48 object-cover transition-transform duration-800 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent" />

            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-pink-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                Featured
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-5 space-y-4">
            {/* Title */}
            <h3 className="text-xl font-bold text-white bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent line-clamp-2">
              {project.name}
            </h3>

            {/* Description - Short + Read More */}
            <div className="text-gray-300 text-sm leading-relaxed">
              <p
                className={`${
                  showFullDesc ? "" : "line-clamp-2"
                } transition-all duration-300`}
              >
                {project.description}
              </p>

              {/* Read More / Less Button */}
              {project.description && project.description.length > 100 && (
                <button
                  onClick={toggleDescription}
                  className="mt-2 flex items-center gap-1 text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors"
                >
                  {showFullDesc ? (
                    <>
                      Show Less <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Read More <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Tech Stack - Compact */}
            <div className="flex flex-wrap gap-2">
              {project.tools.slice(0, 4).map((tool, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-300"
                >
                  {tool}
                </span>
              ))}
              {project.tools.length > 4 && (
                <span className="text-gray-500 text-xs self-center">
                  +{project.tools.length - 4}
                </span>
              )}
            </div>

            {/* Buttons - Super Clean & Small */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              {project.demo && (
                <Link
                  href={project.demo}
                  target="_blank"
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-5 py-2.5 rounded-lg text-sm font-medium text-white shadow-lg transition-all hover:scale-105"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Link>
              )}

              {project.code && (
                <Link
                  href={project.code}
                  target="_blank"
                  className="flex items-center gap-2 border border-gray-600 hover:border-gray-500 px-5 py-2.5 rounded-lg text-sm text-gray-300 hover:text-white transition-all"
                >
                  <Github className="w-4 h-4" />
                  Code
                </Link>
              )}

              {/* Copy Button - Small Icon */}
              {(project.demo || project.code) && (
                <button
                  onClick={copyLink}
                  className="ml-auto p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700 transition-colors"
                  title="Copy link"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-400" />
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ProjectCard;
