import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaHome } from "react-icons/fa";
import DarkModeToggle from "./DarkModeToggle ";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b-gray-50 bg-slate-950/90 px-16 py-6 text-white  backdrop-blur-md md:justify-around dark:bg-green-950">
        <ul className="hidden md:flex gap-5 ">
          <li className="cursor-pointer text-3xl opacity-70 transition-all duration-300 hover:text-green-800 hover:opacity-100 ">
            <a
              href="https://github.com/shanikauwu1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>

          <li className="cursor-pointer text-3xl opacity-70 transition-all duration-300 hover:text-green-800 hover:opacity-100">
            <a
              href="https://www.linkedin.com/in/shanikajayawardane/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>

        <ul className="hidden md:flex gap-10 ">
          <a
            href="#home"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 text-3xl "
          >
            <li>
              <FaHome />
            </li>
          </a>

          <a
            href="#about"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 text-2xl lg:text-xl"
          >
            <li>About </li>
          </a>

          <a
            href="#projects"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 text-2xl lg:text-xl"
          >
            <li>Projects</li>
          </a>
          <a
            href="#contact"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 text-2xl lg:text-xl"
          >
            <li>Contact</li>
          </a>
        </ul>
        <DarkModeToggle />
        <a
          href="#home"
          className="text-4xl font-semibold  bg-gradient-to-r from-white to-green-600 bg-clip-text text-transparent  opacity-90 transition-all duration-300"
        >
          SE
        </a>

        {isOpen ? (
          <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
        ) : (
          <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
        )}

        {isOpen && (
          <div
            className={`fixed right-0 top-[87px] flex h-screen w-1/2 flex-col items-start justify-start gap-20 border-1 border-gray-800 bg-green-800/90 p-12 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col gap-5 ">
              <a
                href="#home"
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 text-3xl"
              >
                <li>
                  <FaHome />
                </li>
              </a>

              <a
                href="#about"
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 text-2xl"
              >
                <li>About Me</li>
              </a>

              <a
                href="#projects"
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 text-2xl"
              >
                <li>Projects</li>
              </a>
              <a
                href="#contact"
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 text-2xl"
              >
                <li>Contact</li>
              </a>
            </ul>

            <ul className="flex gap-5">
              <li className="cursor-pointer text-4xl opacity-70 transition-all duration-300 hover:text-5xl hover:text-black hover:opacity-100">
                <a
                  href="https://github.com/shanikauwu1/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </li>

              <li className="cursor-pointer text-4xl opacity-70 transition-all duration-300 hover:text-5xl hover:text-black hover:opacity-100">
                <a
                  href="https://www.linkedin.com/in/shanikajayawardane/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
