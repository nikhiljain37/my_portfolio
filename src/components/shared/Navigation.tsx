"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import floppy from "@/assets/nav-floppy.png";
import project from "@/assets/nav-projects.png";
import search from "@/assets/nav-search.png";
import github from "@/assets/nav-github.png";
import { ModeToggle } from "@/components/shared/ModToggle";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

const navItems = [
  { url: "/", icon: floppy, label: "Home" },
  { url: "/about", icon: search, label: "About" },
  { url: "/projects", icon: project, label: "Projects" },
  { url: "https://github.com/nikhiljain37", icon: github, label: "GitHub" },
];

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="pt-6 h-20 top-0 fixed w-full z-50 border-b-2 sm:border-b-0 bg-background dark:bg-zinc-950">
      <div className="w-full sm:w-4/5 md:w-3/5 mx-auto flex flex-row sm:flex-row justify-between h-20 sm:h-auto items-center px-4">
        <div className="flex sm:flex-nowrap sm:max-xl:space-x-2 md:space-x-7 space-x-1 mr-1 mb-4 sm:mb-0">
          {navItems.map((item) => {
            const isActive = pathname === item.url;
            return (
              <Button
                key={item.url}
                className={`p-2 size-15 sm:size-15 rounded-lg border-2 bg-background hover:bg-zinc-100 dark:hover:bg-zinc-900 dark:hover:border-gray-800 dark:bg-zinc-950 overflow-hidden
                  ${
                    isActive
                      ? "bg-zinc-100 dark:bg-zinc-900 dark:hover:border-gray-800"
                      : ""
                  }`}
              >
                <Link href={item.url} key={item.label}>
                  <div className="flex items-center space-x-1 sm:max-[1200px]:space-x-2 md:min-[1190px]:space-x-3">
                    <Image
                      src={item.icon}
                      alt={""}
                      width={12}
                      height={12}
                      className="sm:w-6"
                    />
                    <span className="text-xs sm:max-[xl]:text-xs md:text-sm  font-medium text-gray-700 dark:text-gray-300">
                      {item.label}
                    </span>
                  </div>
                </Link>
              </Button>
            );
          })}
        </div>
        <div className="mx-2 pb-4">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
