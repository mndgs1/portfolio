"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

import { Card } from "@/components/ui/card";
import { toast } from "sonner";

const DiscordButton = () => {
    const handleDiscordClick = () => {
        navigator.clipboard.writeText("Mndgs#7132");
        toast(`"Mndgs#7132" copied to clipboard`);
    };

    return (
        <button onClick={handleDiscordClick}>
            <Card className="py-2 px-4 flex gap-2 w-fit items-center group hover:bg-[#5865F2]/20 hover:border-[#5865F2] mb-2 bg-[#5865F2]/10 border-[#5865F2]/20 transition-all">
                <FontAwesomeIcon
                    icon={faDiscord}
                    className="w-8 h-8"
                    color="#5865F2"
                />
                Mndgs#7132
            </Card>
        </button>
    );
};

export default DiscordButton;
