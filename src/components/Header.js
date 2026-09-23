"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const navLinks = [
  {
    label: "Trang Chủ",
    href: "/",
  },
  {
    label: "Giới Thiệu",
    href: "/gioi-thieu",
  },
  {
    label: "Tải game",
    href: "/tai-game",
  },
  {
    label: "Donate",
    href: "/donate",
  },
  {
    label: "giftcode",
    href: "/giftcode",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="nro-header sticky-top shadow-sm">
      <div className="container-nro px-3">
        <div className="d-flex align-items-center header-inner">
          <Logo />

          <nav className="nro-nav d-flex align-items-center">
            {navLinks.map((item) => {
              const isActive = item.href === pathname;

              return (
                <Link key={item.href} href={item.href} target={item.target} rel={item.rel} className={isActive ? "active" : ""}>
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
