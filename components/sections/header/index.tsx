"use client";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Navbar from "./navbar/Navbar";
import Logo from "@/components/shared/Logo";
import MobileNav from "./navbar/MobileNav";

const Header = () => {
    return (
        <header className="container border-b min-h-[74px] flex justify-between items-center">
            <Logo />
            <Navbar listClasses="hidden md:flex" />
            <MobileNav />
        </header>
    );
};

export default Header;
