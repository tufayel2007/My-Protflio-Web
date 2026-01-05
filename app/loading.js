import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#050505] text-white overflow-hidden font-sans">
      {/* 1. Cinematic Background Layers */}
      <div className="absolute inset-0">
        {/* Deep Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black"></div>

        {/* Moving Scanlines Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>

        {/* Animated Grid with Perspective */}
        <div
          className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]"
          style={{
            transform: "perspective(500px) rotateX(60deg) translateY(0)",
          }}
        ></div>
      </div>

      {/* 2. Central Logo Stage */}
      <div className="relative flex items-center justify-center">
        {/* Orbital Rings */}
        <div className="absolute w-[300px] h-[300px] border border-purple-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
        <div className="absolute w-[350px] h-[350px] border border-cyan-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

        {/* The "Glass" Container */}
        <div className="relative z-20 p-8 rounded-3xl backdrop-blur-md bg-white/5 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <div className="relative">
            {/* Soft Breathing Glow behind logo */}
            <div className="absolute inset-0 bg-purple-500 blur-[60px] opacity-30 animate-pulse"></div>

            <Image
              src="/ParsonaBrand.png"
              alt="Brand Logo"
              width={140}
              height={140}
              priority
              className="relative z-10 brightness-110 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
            />
          </div>
        </div>

        {/* Geometric "Data" Particles */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 border border-cyan-400 opacity-50 animate-bounce"
            style={{
              top: `${i * 40}%`,
              left: `${i * 25}%`,
              animationDelay: `${i * 0.5}s`,
              transform: `rotate(${i * 45}deg)`,
            }}
          />
        ))}
      </div>

      {/* 3. Typography & Progress */}
      <div className="relative z-20 mt-16 flex flex-col items-center">
        {/* Welcome Text with Glitch Effect */}
        <h1 className="mt-12 text-3xl md:text-4xl font-bold tracking-wider relative">
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 glitch"
            data-text="Welcome to My Portfolio"
          >
            Welcome to My Portfolio
          </span>
        </h1>

        {/* Minimalist Progress Bar */}
        <div className="w-48 h-[2px] bg-gray-800 rounded-full overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-full animate-loading-slide"></div>
        </div>

        <div className="mt-6 flex gap-2">
          <span className="w-1 h-1 bg-purple-500 rounded-full animate-ping"></span>
          <span className="w-1 h-1 bg-cyan-500 rounded-full animate-ping [animation-delay:0.2s]"></span>
          <span className="w-1 h-1 bg-pink-500 rounded-full animate-ping [animation-delay:0.4s]"></span>
        </div>
      </div>
    </div>
  );
}
