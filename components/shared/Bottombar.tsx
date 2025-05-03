"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "constants/index";

function Bottombar() {
  const pathname = usePathname();

  return (
    <section className="fixed bottom-0 z-50 flex w-full items-center justify-around bg-dark-2 px-4 py-2 md:hidden">
      {sidebarLinks.map((link) => {
        const isActive =
          (pathname.includes(link.route) && link.route.length > 1) ||
          pathname === link.route;

        return (
          <Link
            href={link.route}
            key={link.label}
            className={`flex flex-col items-center justify-center gap-1 p-2 rounded-md transition ${
              isActive ? "bg-primary-500" : "hover:bg-dark-4"
            }`}
          >
            <Image
              src={link.imgURL}
              alt={link.label}
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="text-amber-50 text-[10px] text-light-1">{link.label.split(" ")[0]}</p>
          </Link>
        );
      })}
    </section>
  );
}

export default Bottombar;
