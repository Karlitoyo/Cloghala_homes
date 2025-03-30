import React, { useState, ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Icons for burger menu and dropdown

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Layout" }: Props) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <nav className={`max-w-screen-xl flex items-center justify-between mx-auto p-4`}>
          {/* Logo */}
          <a
            href="/"
            className={`text-2xl font-semibold transition duration-300`}
          >
            <Image
              src="/images/homePage/Logo/logo.jpg"
              alt="Logo"
              width={75}
              height={75}
              priority
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className={`py-2 px-3 transition text-yellowApp ${router.pathname === "/" ? "font-bold border-b-2 border-gray-900" : "hover:text-white"}`}>Home</Link>
            {/* <Link href="/ourWork" className={`py-2 px-3 transition text-yellowApp ${router.pathname === "/ourWork" ? "font-bold border-b-2 border-gray-900" : "hover:text-white"}`}>Our Work</Link> */}
            <Link href="/about" className={`text-yellowApp py-2 px-3 transition ${router.pathname === "/about" ? "font-bold border-b-2 border-gray-900" : "hover:text-white"}`}>About</Link>
            <Link href="/contact" className={`text-yellowApp py-2 px-3 transition ${router.pathname === "/contact" ? "font-bold border-b-2 border-gray-900" : "hover:text-white"}`}>Contact</Link>
          </div>

          {/* Mobile Burger Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-yellowApp z-50">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 left-0 w-full h-screen bg-dark text-yellowApp flex flex-col items-center justify-center transition-transform duration-300 ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
              }`}
          >
            <ul className="space-y-6 text-2xl text-center">
              <li><Link href="/" onClick={toggleMenu} className="hover:underline">Home</Link></li>
              {/* <li><Link href="/ourWork" onClick={toggleMenu} className="hover:underline">Our Work</Link></li> */}
              <li><Link href="/about" onClick={toggleMenu} className="hover:underline">About</Link></li>
              <li><Link href="/contact" onClick={toggleMenu} className="hover:underline">Contact</Link></li>
            </ul>
          </div>
        </nav>
      </header>

      <div>{children}</div>

      <footer className="bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow-sm md:flex md:items-center md:justify-between md:p-6 dark:bg-footerBrown dark:border-gray-600">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025 Cloghala Construction™. All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Layout;