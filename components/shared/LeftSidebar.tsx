"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SignOutButton, SignedIn, useAuth } from "@clerk/nextjs";

import { sidebarLinks } from "constants/index";

const LeftSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { userId } = useAuth();

  return (
    <section className='custom-scrollbar leftsidebar flex flex-col mt-4 mb-2.5 h-screen overflow-y-auto px-4'>
      <div className='flex w-full flex-1 flex-col gap-6'>
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          if (link.route === "/profile") link.route = `${link.route}/${userId}`;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`flex items-center gap-4 p-2 rounded-lg hover:bg-gray-800 transition leftsidebar_link ${
                isActive ? "bg-primary-100" : ""
              }`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className='text-amber-50 text-light-1 text-base max-md:hidden'>{link.label}</p>
            </Link>

          );
        })}
      </div>

      <div className='mt-10 px-1'>
      <SignedIn>
        <SignOutButton signOutCallback={() => router.push("/sign-in")}>
          <div className='flex items-center gap-4 p-2 rounded-lg hover:bg-gray-800 transition cursor-pointer'>
            <Image
              src='/assets/logout.svg'
              alt='logout'
              width={24}
              height={24}
            />
            <p className='text-light-2 text-base max-lg:hidden'>Logout</p>
          </div>
        </SignOutButton>
      </SignedIn>
    </div>
    </section>
  );
};

export default LeftSidebar;