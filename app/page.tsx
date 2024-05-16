import Hero from "@/components/sections/hero";
import {
    Carousel,
    CarouselItem,
    CarouselNext,
    CarouselContent,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { H2, H3 } from "@/components/typography/Headings";
import { P } from "@/components/typography/Paragraph";
import FeaturedProjectCard from "@/components/shared/FeaturedProjectCard";

import Image from "next/image";
import StackCard from "@/components/shared/StackCard";
import { person } from "@/data/person";
import { projects } from "@/data/projects";

export default function Home() {
    const { stack } = person;
    return (
        <>
            <Hero />
            {/* Needs FIXES */}
            {/* <section className="featured section">
                <H2>Featured Projects</H2>
                <Carousel>
                    <CarouselContent>
                        {projects.map((project) => (
                            <CarouselItem
                                className="lg:basis-1/2 group"
                                key={project.title}>
                                <FeaturedProjectCard project={project} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden xl:flex hover:border-primary" />
                    <CarouselNext className="hidden xl:flex hover:border-primary" />
                </Carousel>
            </section> */}
            <section className="My stack">
                <H2 className="">My stack</H2>
                <H3 className="text-muted-foreground text-md lg:text-lg">
                    Back-End
                </H3>
                <div className="flex flex-wrap gap-2 mb-4">
                    {stack.backend.map((tech) => (
                        <StackCard
                            title={tech.title}
                            iconColor={tech.iconColor}
                            iconName={tech.iconName}
                            key={tech.iconColor}
                        />
                    ))}
                </div>
                <H3 className="text-muted-foreground text-md lg:text-lg mb-2">
                    Front-End
                </H3>
                <div className="flex flex-wrap gap-2 mb-4">
                    {stack.frontend.map((tech) => (
                        <StackCard
                            title={tech.title}
                            iconColor={tech.iconColor}
                            iconName={tech.iconName}
                            key={tech.iconColor}
                        />
                    ))}
                </div>
                <H3 className="text-muted-foreground text-md lg:text-lg">
                    Tools
                </H3>
                <div className="flex flex-wrap gap-2">
                    {stack.tools.map((tech) => (
                        <StackCard
                            title={tech.title}
                            iconColor={tech.iconColor}
                            iconName={tech.iconName}
                            key={tech.iconColor}
                        />
                    ))}
                </div>
            </section>
            <section className="About me section">
                <H2>About me</H2>
                {/* <div className="md:grid md:grid-cols-2 md:justify-items-right md:items-center"> */}
                <div className="flex flex-col lg:flex-row xl:mx-24 lg:gap-20 items-center">
                    <div className="lg:order-2 mb-6">
                        {person.aboutMe.map((paragraph, index) => (
                            <P className="md:mb-6" key={index}>
                                {paragraph}
                            </P>
                        ))}
                    </div>
                    <div className="">
                        <div className="aspect-square max-w-96 max-h-96 lg:w-96 lg:h-96 rounded-full">
                            <Image
                                src="/img/personal/family_photo.jpeg"
                                alt="personal photo"
                                width={800}
                                height={800}
                                className="rounded-full w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
