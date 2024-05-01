"use client";
import StyledLink from "@/components/shared/StyledLink";
import { H1 } from "@/components/typography/Headings";
import { P } from "@/components/typography/Paragraph";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
    return (
        <section className="my-32">
            <P variant={"muted"}>Hello World! I am</P>
            <div className="flex flex-col gap-6">
                <div>
                    <H1 className="mb-0 lg:mb-0">
                        Mindaugas{" "}
                        <span className="text-primary">Bankauskas</span>,{" "}
                    </H1>
                    <H1 className="mb-0 lg:mb-0">
                        <TypeAnimation
                            preRenderFirstString={true}
                            sequence={[
                                // Same substring at the start will only be typed once, initially
                                "Husband & Father",
                                2000,
                                "Carpenter of the Web",
                                2000,
                                "UX/UI Designer",
                                2000,
                                "Front-End Developer",
                                2000,
                            ]}
                            speed={25}
                        />
                    </H1>
                </div>
                <P variant={"muted"} className="mb-0">
                    As a full-stack JavaScript developer, I build modern web
                    apps with tools such as{" "}
                    <StyledLink href="#">React.js</StyledLink>,{" "}
                    <StyledLink href="#">Next.js</StyledLink> &{" "}
                    <StyledLink href="#">Tailwind CSS</StyledLink>
                </P>
                <div className="flex gap-4">
                    <Link href={"/contact"}>
                        <Button>Let&apos;s talk</Button>
                    </Link>
                    <Link
                        target="_blank"
                        href={
                            "/pdf/Mindaugas_Bankauskas_-_Frontend_Developer.pdf"
                        }>
                        <Button variant={"secondary"}>My Resume</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
