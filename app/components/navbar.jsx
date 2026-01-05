"use client";

import Link from "next/link";
import { useState } from "react";
import Loading from "../loading";
import RotatingProfile from "./helper/RotatingProfile";

function Navbar() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 700);
  };

  return (
    <>
      {loading && <Loading />}

      <nav className="bg-transparent">
        <div className="flex items-center justify-between py-5">
          <RotatingProfile />

          <ul className="md:flex md:space-x-1">
            {[
              ["ABOUT", "#about"],
              ["EXPERIENCE", "#experience"],
              ["SKILLS", "#skills"],
              ["PROJECTS", "#projects"],
              ["EDUCATION", "#education"],
            ].map(([label, hash]) => (
              <li key={hash}>
                <Link
                  href={`/${hash}`}
                  onClick={handleClick}
                  className="px-4 py-2 text-white hover:text-pink-600 underline"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
