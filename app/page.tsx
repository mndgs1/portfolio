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

import LinkWithIcon from "@/components/shared/LinkWithIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import StackCard from "@/components/shared/StackCard";
import { person } from "@/data/person";

export default function Home() {
    const { stack } = person;
    return (
        <>
            <Hero />
            <section className="featured section">
                <H2>Featured Projects</H2>
                <Carousel>
                    <CarouselContent>
                        <CarouselItem className="lg:basis-1/2 group">
                            <FeaturedProjectCard />
                        </CarouselItem>
                        <CarouselItem className="lg:basis-1/2 group">
                            <FeaturedProjectCard />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="hidden xl:flex hover:border-primary" />
                    <CarouselNext className="hidden xl:flex" />
                </Carousel>
            </section>
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
                        <P className="md:mb-6">
                            Hey there! I&apos;m [Your Name], a 31-year-old with
                            a passion for building both physical and digital
                            worlds. For over a decade, I&apos;ve wielded my
                            tools as a carpenter, crafting structures and spaces
                            that stand the test of time. But as life evolved, so
                            did my interests.
                        </P>
                        <P>
                            Today, I&apos;m not just a carpenter; I&apos;m a
                            family man. My world revolves around my wonderful
                            wife, two energetic boys, and our loyal canine
                            companion. They bring joy, chaos, and a whole lot of
                            love into every corner of our lives.
                        </P>
                    </div>
                    <div className="">
                        <div className="bg-green-500 w-96 h-96 rounded-full">
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
const featuredProjects = [];
