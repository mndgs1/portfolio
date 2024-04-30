"use client";
import { H1, H2 } from "@/components/typography/Headings";
import { ContactForm } from "./form/ContactForm";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Blockquote, P } from "@/components/typography/Paragraph";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import StyledLink from "@/components/shared/StyledLink";
import Link from "next/link";
import SocialsCard from "./SocialsCard";
import DiscordButton from "./DiscordButton";

const page = () => {
    return (
        <div
            className="lg:grid lg:grid-cols-4 lg:gap-12 items-center
        ">
            <section className="section col-span-2">
                <H2>Let&apos;s talk</H2>
                <Blockquote>
                    <P className="font-bold">Email:</P>
                    <StyledLink href="mailto:mindaugasbankauskas@gmail.com">
                        mindaugasbankauskas@gmail.com
                    </StyledLink>
                </Blockquote>
                <Blockquote>
                    <P className="font-bold">Phone:</P>
                    +47 942 15 193
                </Blockquote>
                <Blockquote>
                    <P className="font-bold">Socials:</P>
                    <Link
                        href="https://www.linkedin.com/in/mindaugas-bankauskas/"
                        target="_blank">
                        <Card className="py-2 px-4 flex gap-2 w-fit items-center group hover:border-primary mb-2">
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                className="w-8 h-8"
                                color=""
                            />
                            Mindaugas Bankauskas
                        </Card>
                    </Link>
                    <DiscordButton></DiscordButton>
                </Blockquote>
            </section>
            <section className="col-span-2 section">
                <Card className="p-6 sm:p-14">
                    <H2>Send me a Message</H2>
                    <ContactForm />
                </Card>
            </section>
        </div>
    );
};

export default page;
