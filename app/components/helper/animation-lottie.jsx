"use client";

import { useEffect, useState } from "react";

const AnimationLottie = ({ animationPath, width, className }) => {
  const [Lottie, setLottie] = useState(null);

  useEffect(() => {
    // Dynamically import lottie-react only in the browser
    import("lottie-react").then((mod) => setLottie(() => mod.default));
  }, []);

  if (!Lottie) return null; // or a loader

  return (
    <div className={className}>
    <Lottie
      loop
      autoplay
      animationData={animationPath}
      style={{ width: width || "95%" }}
    />
    </div>
  );
};

export default AnimationLottie;
