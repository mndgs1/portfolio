import { H1 } from "@/components/typography/Headings";
import ProjectCard from "@/components/sections/project";
import { projects } from "@/data/projects";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio | Mindaugas Bankauskas Front-End Developer",
    description:
        "Explore the impressive portfolio of Mindaugas Bankauskas, a skilled Front-End Developer passionate about crafting exceptional digital experiences.",
};
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
