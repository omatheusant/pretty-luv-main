"use client";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/constants";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideBar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex-between custom-scrollbar fixed left-0 top-0 z-10 h-full w-[160px] flex-col overflow-y-auto bg-background px-6 shadow-md max-sm:hidden">
      <Link href="/">
        <Image
          src="/assets/images/logo.svg"
          alt="Pretty Luv"
          width={100}
          height={100}
        />
      </Link>

      <div className="relative flex w-full flex-col gap-4">
        {navLinks.map((item) => {
          const isActive =
            pathname.includes(`${item.route}`) || pathname === item.route;
          return (
            <Link
              href={item.route}
              key={item.route}
              className={`${isActive ? "text-primary" : "text-[#f53fa09d]"} transition-ease flex items-center gap-2 text-lg hover:text-primary`}
            >
              <item.icon size={28} />
              <p className="font-semibold">{item.label}</p>
            </Link>
          );
        })}
      </div>
      <SignedOut>
        <div className="mb-6 flex w-full flex-col gap-3">
          <Link href="/sign-in">
            <Button className=" w-full rounded-sm px-4 py-3">Entrar</Button>
          </Link>
          <Link href="/sign-up">
            <Button variant="outline" className=" w-full rounded-sm px-4 py-3">
              Criar conta
            </Button>
          </Link>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="absolute bottom-5 mb-6 flex  flex-col gap-3 pt-7">
          <Link href="/user-profile">
            <Button
              variant="ghost"
              className="flex w-full items-center justify-center gap-2 rounded-sm p-6 text-[#f53fa09d]  hover:text-primary"
            >
              <Settings size={28} />
              <span className="text-left text-lg">Conta</span>
            </Button>
          </Link>
        </div>
        <span className="h-7"></span>
      </SignedIn>
    </nav>
  );
};

export default SideBar;
