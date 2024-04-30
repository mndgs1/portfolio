import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { Card } from "@/components/ui/card";
import { toast } from "sonner";

const DiscordButton = () => {
    const handleDiscordClick = () => {
        navigator.clipboard.writeText("Mndgs#7132");
        toast(`"Mndgs#7132" copied to clipboard`);
    };

    return (
        <button onClick={handleDiscordClick}>
            <Card className="py-2 px-4 flex gap-2 w-fit items-center group hover:border-primary mb-2">
                <FontAwesomeIcon
                    icon={faDiscord}
                    className="w-8 h-8"
                    color=""
                />
                Mndgs#7132
            </Card>
        </button>
    );
};

export default DiscordButton;
