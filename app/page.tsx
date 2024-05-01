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
import { faLinode } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
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
                <H3 className="">Back-End</H3>
                <LinkWithIcon
                    href="https://nodejs.org/en"
                    className="hover:border-[#0A66C2] mb-2 bg-[#0A66C2]/10 border-[#0A66C2]/20 hover:bg-[#0A66C2]/20">
                    <FontAwesomeIcon
                        icon={faLinode}
                        className="w-8 h-8"
                        color="#0A66C2"
                    />
                    Node
                </LinkWithIcon>
            </section>
            <section className="About me">
                <H2>About me</H2>
            </section>
            <section>
                <H2>Contact Information</H2>
            </section>
        </>
    );
}

const featuredProjects = [];
