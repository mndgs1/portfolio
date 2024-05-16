import Link from "next/link";
import Image from "next/image";

import { H2, H4 } from "@/components/typography/Headings";
import { P } from "@/components/typography/Paragraph";
import { Button } from "@/components/ui/button";
import StackCard from "@/components/shared/StackCard";

type ProjectCardProps = {
    title: string;
    imgUrl: string;
    shortDescription: string;
    liveLink: string;
    repoLink: string;
    stack: Stack[];
};

interface Stack {
    iconColor: string;
    iconName: string;
    title: string;
}

const ProjectCard = ({
    title,
    imgUrl,
    shortDescription,
    liveLink,
    repoLink,
    stack,
}: ProjectCardProps) => {
    return (
        <div className="border-b pb-6 md:pb-10 section">
            <H2 className="inline-block border-b border-b-primary ">{title}</H2>
            <div className="lg:grid lg:grid-cols-3 lg:gap-8 items-center">
                <Image
                    src={imgUrl}
                    alt="asd"
                    height={1000}
                    width={800}
                    className="col-span-2 mx-auto lg:order-last object-contain size-3/4"
                />
                <div className="flex flex-col gap-4">
                    <div>
                        <H4 className="text-muted-foreground">Description</H4>
                        <P className="mb-0">{shortDescription}</P>
                    </div>
                    <div>
                        <H4 className="text-muted-foreground">Stack</H4>
                        <div className="flex flex-wrap gap-2 md:gap-4">
                            {stack.map((tech) => (
                                <StackCard
                                    iconColor={tech.iconColor}
                                    iconName={tech.iconName}
                                    title={tech.title}
                                    key={tech.iconName}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <Link href={liveLink} target="_blank">
                            <Button>View Live</Button>
                        </Link>
                        <Link href={repoLink} target="_blank">
                            <Button variant={"secondary"}>Github Repo</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
