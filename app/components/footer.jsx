// @flow strict
import Link from "next/link";

function Footer() {
  return (
    <footer className="relative border-t border-[#353951] bg-[#0d1224] text-white overflow-hidden">
      {/* Subtle animated gradient line */}
      <div className="absolute top-0 left-1/4 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent animate-pulse"></div>

      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-8 lg:py-12 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Section */}
        <p className="text-sm text-center md:text-left">
          Designed & Developed by{" "}
          <Link
            target="_blank"
            href="https://my-protflio-web.vercel.app/"
            className="text-[#16f2b3] hover:text-violet-400 transition-colors duration-300"
          >
            TUFAYEL AHMED
          </Link>
        </p>

        {/* Right Section */}
        <p className="text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>

      {/* Background subtle gradient circle */}
      <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-gradient-to-r from-violet-500 to-transparent opacity-10 blur-3xl"></div>
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-gradient-to-r from-cyan-400 to-transparent opacity-10 blur-3xl"></div>
    </footer>
  );
}

export default Footer;
