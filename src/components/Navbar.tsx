"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";


function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 dark", className)}>
        <Menu setActive={setActive}>
            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item= "Home">
            
            </MenuItem>
            </Link>
            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item= "Music">  
            <div className="flex flex-col space-y-4 display-flex ">
            <HoveredLink className="text-black font-extrabold" href="/courses">classic</HoveredLink> 
            <HoveredLink className="text-black font-bold" href="/courses">Hip-hop</HoveredLink> 
            <HoveredLink className="text-black  font-bold" href="/courses">Romantic</HoveredLink> 
            <HoveredLink className="text-black font-bold " href="/">Sad</HoveredLink> 
            </div>   
            </MenuItem>

            </Link>
            <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active} item= "Contact-us">
            
            </MenuItem>
            </Link>
            
        </Menu>
    </div>
  )
}

export default Navbar
