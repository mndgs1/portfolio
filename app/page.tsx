import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "@/components/sections/hero";
import {
    Carousel,
    CarouselItem,
    CarouselNext,
    CarouselContent,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { H2, H3 } from "@/components/typography/Headings";
import { P } from "@/components/typography/Paragraph";
import FeaturedProjectCard from "@/components/shared/FeaturedProjectCard";

export default function Home() {
    return (
        <>
            <Hero />
            <section className="featured">
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
                <H2>My stack</H2>
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
