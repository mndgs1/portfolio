import { H1, H2, H3, H4 } from "@/components/typography/Headings";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { P } from "@/components/typography/Paragraph";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import StyledLink from "@/components/shared/StyledLink";
import Link from "next/link";
import ProjectCard from "@/components/sections/project";

const page = () => {
    return (
        <article className="section">
            <H1>Portfolio</H1>
            <section className="">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        stack={project.stack}
                        repoLink={project.links.github}
                        liveLink={project.links.live}
                        shortDescription={project.shortDescription}
                        imgUrl={project.image}
                    />
                ))}
            </section>
        </article>
    );
};

export default page;

const projects = [
    {
        title: "Holidaze",
        image: "/img/holidaze/Holidaze.png",
        links: {
            live: "",
            github: "",
        },
        shortDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quasi dignissimos. Libero inventore vitae atque laboriosam in,eligendi, optio placeat maxime quae veronecessitatibus animi, doloribus assumenda culpa tempore aliquam.",
        stack: [
            {
                title: "Typescript",
                iconColor: "#3178C6",
                iconName: "typescript",
            },
            {
                title: "React.js",
                iconColor: "#61DAFB",
                iconName: "react",
            },
            {
                title: "Tailwind",
                iconColor: "#06B6D4",
                iconName: "tailwindcss",
            },
        ],
    },
];
