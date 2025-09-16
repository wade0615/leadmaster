"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      id="nav"
      className="text-white sticky top-0 left-0 z-10 shadow-lg bg-leadmaster-red"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="py-1 px-6 flex justify-between items-center h-20">
          <Link href="/" className="inline-block px-4 py-1.5">
            <Image
              src="/leadmaster_logo2.png"
              alt="Logo"
              width={100}
              height={40}
              className="p-px bg-white border border-white rounded shadow-[0_0_0_3px_#da1b0a_inset]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <Link
              href="/3d"
              className="inline-block p-2 md:px-8 hover:text-gray-200 transition-colors bg-white/10 rounded px-3 py-1"
            >
              3D 展示
            </Link>
            <Link
              href="/about"
              className="inline-block p-2 md:px-8 hover:text-gray-200 transition-colors"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="inline-block p-2 md:px-8 hover:text-gray-200 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/agent"
              className="inline-block p-2 md:px-8 hover:text-gray-200 transition-colors"
            >
              Agent
            </Link>
            <Link
              href="/recruitment"
              className="inline-block p-2 md:px-8 hover:text-gray-200 transition-colors"
            >
              Recruitment
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="hamburger hamburger--collapse"
              type="button"
              aria-label="Toggle menu"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeMenu}
          ></div>
          <div className="fixed top-0 right-0 h-full w-80 bg-leadmaster-red z-50 px-14 py-16">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" className="block mx-auto w-24" onClick={closeMenu}>
                <Image
                  src="/leadmaster_logo.png"
                  alt="Logo"
                  width={96}
                  height={40}
                  className="inline-block bg-white rounded"
                />
              </Link>
              <button
                onClick={closeMenu}
                className="text-white hover:text-gray-200"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="mx-auto text-white text-2xl">
              <Link
                href="/"
                className="block mb-2 p-2 hover:text-gray-200 transition-colors"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                href="/3d"
                className="block mb-2 p-2 hover:text-gray-200 transition-colors bg-white/10 rounded px-3 py-1"
                onClick={closeMenu}
              >
                3D 展示
              </Link>
              <Link
                href="/about"
                className="block mb-2 p-2 hover:text-gray-200 transition-colors"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                href="/projects"
                className="block mb-2 p-2 hover:text-gray-200 transition-colors"
                onClick={closeMenu}
              >
                Projects
              </Link>
              <Link
                href="/agent"
                className="block mb-2 p-2 hover:text-gray-200 transition-colors"
                onClick={closeMenu}
              >
                Agent
              </Link>
              <Link
                href="/recruitment"
                className="block mb-2 p-2 hover:text-gray-200 transition-colors"
                onClick={closeMenu}
              >
                Recruitment
              </Link>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
