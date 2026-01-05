"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const auraRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let auraX = 0;
    let auraY = 0;
    let lastX = 0;
    let lastY = 0;

    const cursor = cursorRef.current;
    const aura = auraRef.current;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const velocityX = mouseX - lastX;
      const velocityY = mouseY - lastY;
      const speed = Math.min(
        Math.sqrt(velocityX ** 2 + velocityY ** 2) / 10,
        1.5
      );

      if (cursor) {
        cursor.style.setProperty("--x", `${mouseX}px`);
        cursor.style.setProperty("--y", `${mouseY}px`);
        cursor.style.setProperty("--scale", `${1 + speed}`);
      }

      lastX = mouseX;
      lastY = mouseY;
    };

    const animate = () => {
      auraX += (mouseX - auraX) * 0.08;
      auraY += (mouseY - auraY) * 0.08;

      if (aura) {
        aura.style.setProperty("--x", `${auraX}px`);
        aura.style.setProperty("--y", `${auraY}px`);
      }

      requestAnimationFrame(animate);
    };

    const handleHover = (e) => {
      const target = e.target;
      setIsHovered(!!target.closest("a, button, input, .cursor-pointer"));
    };

    const handleDown = () => setIsClicking(true);
    const handleUp = () => setIsClicking(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", handleHover);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleHover);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, []);

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999]">
      {/* CORE CURSOR */}
      <div
        ref={cursorRef}
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 ease-out"
        style={{
          transform: `translate3d(var(--x), var(--y), 0) scale(${
            isHovered ? 2.2 : 1
          })`,
        }}
      >
        <div
          className={`w-2 h-2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]
            ${isClicking ? "scale-50" : ""}
          `}
          style={{
            transform: "scale(var(--scale, 1))",
          }}
        />
      </div>

      {/* LIQUID AURA */}
      <div
        ref={auraRef}
        className={`absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full
          transition-all duration-500 ease-out
          ${isHovered ? "w-20 h-20" : "w-10 h-10"}
        `}
        style={{
          transform: "translate3d(var(--x), var(--y), 0)",
          background:
            "radial-gradient(circle at 30% 30%, rgba(0,255,255,0.35), rgba(168,85,247,0.15), transparent 70%)",
          filter: "blur(6px)",
        }}
      >
        {isClicking && (
          <div className="absolute inset-0 rounded-full animate-ping bg-white/20" />
        )}
      </div>

      <style jsx global>{`
        html,
        body,
        a,
        button {
          cursor: none !important;
        }
      `}</style>
    </div>
  );
}
