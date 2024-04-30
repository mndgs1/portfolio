import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

type SocialsCardProps = {
    children: ReactNode;
    onClick?: void;
};

const SocialsCard = ({ children }: SocialsCardProps) => {
    return (
        <Link
            href="https://www.linkedin.com/in/mindaugas-bankauskas/"
            target="_blank">
            <Card className="py-2 px-4 flex gap-2 w-fit items-center group hover:border-primary mb-2">
                {children}
            </Card>
        </Link>
    );
};

export default SocialsCard;
