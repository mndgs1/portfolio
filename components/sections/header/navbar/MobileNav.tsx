import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import Navbar from "./Navbar";

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant={"icon"}
                    size={"icon"}
                    className="md:hidden h-10 w-10">
                    <Menu size={"1.4rem"} />
                </Button>
            </SheetTrigger>
            <SheetContent className="flex items-center justify-center">
                <Navbar listClasses="flex-col gap-8" linkClasses="" />
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
