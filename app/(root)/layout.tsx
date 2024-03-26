import MobileNav from "@/components/shared/nav/MobileNav";
import SideBar from "@/components/shared/nav/SideBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative flex size-full bg-background">
      <SideBar />
      <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 ">
        <div className="mx-auto w-full">
          <MobileNav />

          {children}
        </div>
      </section>
    </main>
  );
};

export default Layout;
