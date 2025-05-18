"use client";

import Link from "next/link";

const links = [
  {
    path: "/",
    title: "Accueil",
  },
  {
    path: "/categories",
    title: "Categories",
  },
];

const Header = () => {
  return (
    <div className="flex gap-4 p-4 text-white bg-blue-700">
      {links.map((link) => (
        <Link href={link.path} key={link.title}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Header;
