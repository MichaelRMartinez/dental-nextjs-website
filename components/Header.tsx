"use client";
import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/data/data";
import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => setIsOpen(!isOpen);
  const pathname = usePathname();

  return (<header className="w-full py-4 lg:py-0 fixed top-0 left-0 z-40 border-y border-primary-100 bg-white">
    <div className="container flex items-center justify-between">
      
      {/* LOGO */}
      <Link href={'/'}>
        <Image src={'/images/logo.png'} alt="Dentora logo" width={167} height={43} />
      </Link>

      {/* MOBILE MENU */}
      <nav className={`lg:hidden absolute top-full left-0 w-full bg-white/60 backdrop-blur-2xl border-y border-gray-200 flex items-center justify-center -z-30 -translate-y-[170%] transition-transform ${isOpen ? "translate-y-0" : ""}`}>
        <ul className="py-6 text-center">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link href={item.href} className={`uppercase p-1.5 inline-block hover:text-primary-500 transition-colors font-medium ${pathname == item.href ? "text-primary-600" : ""}`}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* DESKTOP MENU */}
      <nav className="hidden lg:block">
        <ul className="flex items-center gap-12">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link href={item.href} className={`font-semibold border-b-[3px] border-white hover:border-primary-500 hover:text-primary-500 transition-colors block py-4 ${pathname === item.href ? "!border-primary-500 text-primary-500" : ""}`}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* MENU BUTTON */}
      <button className="lg:hidden border border-gray-300 size-11 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors focus:bg-gray-100" onClick={handleClick}>
        {isOpen ? <RiCloseLine /> : <RiMenuLine />}
      </button>
    </div>
  </header>)
}
