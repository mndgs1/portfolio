import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "@/components/sections/hero";
import { Carousel } from "@/components/ui/carousel";
import { H2 } from "@/components/typography/Headings";

export default function Home() {
    return (
        <>
            <Hero />
            <section className="featured">
                <H2>Featured Projects</H2>
            </section>
        </>
    );
}
