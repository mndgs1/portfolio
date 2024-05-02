import { H2 } from "@/components/typography/Headings";
import { ContactForm } from "./form/ContactForm";
import { Card } from "@/components/ui/card";
import { Blockquote, P } from "@/components/typography/Paragraph";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import StyledLink from "@/components/shared/StyledLink";
import DiscordButton from "./DiscordButton";
import LinkWithIcon from "../../components/shared/LinkWithIcon";
import { person } from "@/data/person";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const page = () => {
    const { socialLinks } = person;
    return (
        <article className="lg:grid lg:grid-cols-4 lg:gap-12 items-center">
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
                    <div className="flex flex-wrap gap-2">
                        <Link href={socialLinks.linkedIn} target="_blank">
                            <Button
                                variant={"icon"}
                                size={"icon"}
                                className="w-14 h-14">
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    className="w-8 h-8"
                                />
                            </Button>
                        </Link>
                        <Link href={socialLinks.github} target="_blank">
                            <Button
                                variant={"icon"}
                                size={"icon"}
                                className="w-14 h-14">
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className="w-8 h-8"
                                />
                            </Button>
                        </Link>
                        <DiscordButton />
                    </div>
                </Blockquote>
            </section>
            <section className="col-span-2 section">
                <Card className="p-6 sm:p-14">
                    <H2>Send me a Message</H2>
                    <ContactForm />
                </Card>
            </section>
        </article>
    );
};

export default page;
