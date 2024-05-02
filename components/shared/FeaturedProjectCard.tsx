import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
} from "../ui/card";
import Image from "next/image";
import { P } from "../typography/Paragraph";
import StyledLink from "./StyledLink";

const FeaturedProjectCard = ({ project }: any) => {
    return (
        <Card className="h-96 hover:border-primary grid grid-cols-2 group overflow-hidden">
            <div>
                <CardHeader>
                    <CardTitle className="">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <P variant={"muted"}>{project.shortDescription}</P>
                    <StyledLink href="#">Read More</StyledLink>
                </CardContent>
            </div>
            <div className="p-4">
                <Image
                    src={project.image}
                    alt=""
                    width={300}
                    height={800}
                    className="object-contain w-full h-full"
                />
            </div>
        </Card>
    );
};

export default FeaturedProjectCard;
