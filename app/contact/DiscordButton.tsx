"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const DiscordButton = () => {
    const handleDiscordClick = () => {
        navigator.clipboard.writeText("Mndgs#7132");
        toast(`"Mndgs#7132" copied to clipboard`);
    };

    return (
        <Button
            variant={"icon"}
            size={"icon"}
            className="w-14 h-14"
            onClick={handleDiscordClick}>
            <FontAwesomeIcon icon={faDiscord} className="w-8 h-8" />
        </Button>
    );
};

export default DiscordButton;
