"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import FacebookChat from "./FacebookChat";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    // Hide nav on login page (if exists)
    const isLoginPage = pathname === "/login";
    setShowNav(!isLoginPage);
  }, [pathname]);

  return (
    <div id="london">
      {showNav && <Nav />}
      <main>{children}</main>
      {showNav && <Footer />}
      <FacebookChat />
    </div>
  );
}
