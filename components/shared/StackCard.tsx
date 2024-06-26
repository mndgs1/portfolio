/* eslint-disable @next/next/no-img-element */
import { Card } from "../ui/card";
import { P } from "../typography/Paragraph";

type StackCardProps = {
    title: string;
    iconName: string;
    iconColor: string;
};
const StackCard = ({ title, iconColor, iconName }: StackCardProps) => {
    return (
        <Card className="hover:bg-primary/5 w-20 h-20 xl:w-24 xl:h-24 inline-flex flex-col items-center justify-center group">
            <div className="flex flex-col items-center justify-center gap-2">
                <img
                    height="32"
                    width="32"
                    src={`https://cdn.simpleicons.org/${iconName}/${iconColor}`}
                    alt={title}
                />
                <P className="mb-0 group-hover:text-primary" size={"sm"}>
                    {title}
                </P>
            </div>
        </Card>
    );
};

export default StackCard;
