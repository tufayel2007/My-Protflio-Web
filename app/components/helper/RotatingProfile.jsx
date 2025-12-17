"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

export default function RotatingProfile() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: { repeat: Infinity, duration: 6, ease: "linear" },
    });
  }, [controls]);

  const handleHoverStart = () => {
    controls.start({
      rotate: -360,
      transition: { repeat: Infinity, duration: 4, ease: "linear" },
    });
  };

  const handleHoverEnd = () => {
    controls.start({
      rotate: 360,
      transition: { repeat: Infinity, duration: 6, ease: "linear" },
    });
  };

  return (
    <div
      className="relative w-[60px] h-[60px] flex items-center justify-center"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {/* Rotating ring with 3 continuous arcs */}
      <motion.div
        animate={controls}
        initial={{ rotate: 0 }}
        className="absolute w-[50px] h-[50px] rounded-full"
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: "2px solid transparent",
            borderTopColor: "#1e90ff",
            transform: "rotate(0deg)",
          }}
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: "2px solid transparent",
            borderTopColor: "#ec4899",
            transform: "rotate(120deg)",
          }}
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: "2px solid transparent",
            borderTopColor: "#16f2b3",
            transform: "rotate(240deg)",
          }}
        />
      </motion.div>

      <div className="w-[38px] h-[38px] rounded-full overflow-hidden bg-white shadow-md z-10">
        <Image
          src="/ProfileHomeMY.png"
          alt="Profile"
          width={38}
          height={38}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
