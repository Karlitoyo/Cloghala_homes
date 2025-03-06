import React, { useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react"; // Icons for burger menu and dropdown

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.95); // Adjusts dynamically to screen size
    };
  
    if (router.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    }
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router.pathname]);

  const isDark = router.pathname !== "/" || isScrolled;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 transition duration-300 bg-dark">
        <nav className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          {/* Logo */}
          <a
            href="#"
            className={`text-2xl font-semibold transition duration-300 ${
              isDark ? "text-gray-900" : "text-white"
            }`}
          >
                        <Image className="opacity-25"
                        src="/images/HeroSection/HeroSectionImage.jpg"
                        alt="Background"
                        width={75}
                        height={75}
                        priority
                        />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className={`py-2 px-3 transition ${router.pathname === "/" ? "font-bold border-b-2 border-gray-900" : "hover:text-gray-900"} ${isDark ? "text-gray-900" : "text-white"}`}>Home</Link>
            <div className="relative">
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className={`py-2 px-3 flex items-center transition hover:text-gray-900 ${isDark ? "text-gray-900" : "text-white"}`}>
              Our Work <ChevronDown className={`ml-2 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} size={16} />
              </button>
              <div className={`absolute left-0 mt-2 backdrop-blur-md bg-gray-900/90 border border-gray-700 rounded-lg w-56 shadow-lg transform transition-all duration-200 ease-in-out ${
              isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}>
              <Link href="socialHousing" className="block px-4 py-3 text-white hover:bg-gray-800 rounded-t-lg transition duration-150">Social Housing</Link>
              <Link href="emergencyHousing" className="block px-4 py-3 text-white hover:bg-gray-800 rounded-b-lg transition duration-150">Emergency Accommodation</Link>
              </div>
            </div>
            <Link href="/about" className={`py-2 px-3 transition ${router.pathname === "/about" ? "font-bold border-b-2 border-gray-900" : "hover:text-gray-900"} ${isDark ? "text-gray-900" : "text-white"}`}>About</Link>
            <Link href="/contact" className={`py-2 px-3 transition ${router.pathname === "/contact" ? "font-bold border-b-2 border-gray-900" : "hover:text-gray-900"} ${isDark ? "text-gray-900" : "text-white"}`}>Contact</Link>
          </div>

          {/* Mobile Burger Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-gray-900 z-50">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Mobile Menu */}
            <div
            className={`fixed top-0 left-0 w-full h-screen bg-gray-900 text-white flex flex-col items-center justify-center transition-transform duration-300 ${
              isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
            }`}
            >
            <button onClick={toggleMenu} className="absolute top-5 right-5 text-white">
              <X size={30} />
            </button>
            <ul className="space-y-6 text-2xl text-center">
              <li><Link href="/" onClick={toggleMenu} className="hover:underline">Home</Link></li>
              <li className="flex flex-col items-center">
              <div className="flex items-center justify-center">
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="hover:underline flex items-center">
                Our Work <ChevronDown className="ml-2" size={16} />
                </button>
              </div>
              {isDropdownOpen && (
                <ul className="mt-2 space-y-2 text-lg">
                <li><Link href="/socialHousing" onClick={toggleMenu} className="block hover:underline">Social Housing</Link></li>
                <li><Link href="/emergencyHousing" onClick={toggleMenu} className="block hover:underline">Emergency Accommodation</Link></li>
                </ul>
              )}
              </li>
              <li><Link href="/about" onClick={toggleMenu} className="hover:underline">About</Link></li>
              <li><Link href="/contact" onClick={toggleMenu} className="hover:underline">Contact</Link></li>
            </ul>
            </div>
        </nav>
      </header>

      <div>{children}</div>

      <footer className="bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow-sm md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025 Cloghala Construction™. All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Layout;