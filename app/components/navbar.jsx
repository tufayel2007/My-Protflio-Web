"use client";

import Link from "next/link";
import { useState } from "react";
import Loading from "../loading";
import RotatingProfile from "./helper/RotatingProfile";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setOpen(false);
    setTimeout(() => setLoading(false), 700);
  };

  const navItems = [
    ["ABOUT", "#about"],
    ["EXPERIENCE", "#experience"],
    ["SKILLS", "#skills"],
    ["PROJECTS", "#projects"],
    ["EDUCATION", "#education"],
  ];

  return (
    <>
      {loading && <Loading />}

      <nav className="bg-transparent relative z-50">
        <div className="flex items-center justify-between py-5">
          <RotatingProfile />

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-1">
            {navItems.map(([label, hash]) => (
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

          {/* Hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu Animation */}
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden absolute right-4 top-20 w-52 rounded-2xl 
              bg-black/90 backdrop-blur-xl shadow-xl border border-white/10"
            >
              {navItems.map(([label, hash], index) => (
                <motion.li
                  key={hash}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={`/${hash}`}
                    onClick={handleClick}
                    className="block px-5 py-3 text-white 
                    hover:text-pink-500 hover:bg-white/10 rounded-xl"
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

export default Navbar;
