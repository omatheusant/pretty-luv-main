"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/constants";
import { SignedOut, SignedIn } from "@clerk/nextjs";
import { Settings } from "lucide-react";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <div className="fixed flex w-full justify-end px-10 py-3 sm:hidden">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/assets/icons/menu.svg"
            alt="Menu icon"
            width={30}
            height={70}
          />
        </SheetTrigger>
        <SheetContent side="left" className=" flex w-[230px] flex-col py-2">
          <Link href="/">
            <Image
              src="/assets/images/logo.svg"
              alt="Pretty Luv"
              width={100}
              height={100}
            />
          </Link>
          <div className="relative mt-10 flex size-full flex-col gap-4">
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
                <Button
                  variant="outline"
                  className=" w-full rounded-sm px-4 py-3"
                >
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
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
