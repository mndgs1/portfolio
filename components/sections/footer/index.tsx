import StyledLink from "@/components/shared/StyledLink";
import { H3, H4 } from "@/components/typography/Headings";
import { P } from "@/components/typography/Paragraph";
import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { person } from "@/data/person";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const { socialLinks, email } = person;

    return (
        <footer className="container border-t mt-2 py-16 lg:py-24 flex flex-col gap-12 md:grid md:grid-cols-4 md:gap-12 md:items-center">
            <section className="col-span-4 md:col-span-2">
                <H3 className="mb-0">Let&apos;s talk</H3>
                <StyledLink
                    href="mailto:mindaugasbankauskas@gmail.com"
                    className="text-xl lg:text-3xl font-bold">
                    {email}
                </StyledLink>
                <div className="mt-2">
                    <Link href={socialLinks.linkedIn} target="_blank">
                        <Button
                            variant={"icon"}
                            size={"icon"}
                            className="w-14 h-14 mr-3">
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
                </div>
            </section>
            <section className="md:justify-self-center">
                <H4 className="mb-2">Links</H4>
                <ul className="flex flex-col gap-1">
                    <li>
                        <StyledLink href="/">Home</StyledLink>
                    </li>
                    <li>
                        <StyledLink href="/contact">Contact </StyledLink>
                    </li>
                    <li>
                        <StyledLink href="/portfolio">Portfolio</StyledLink>
                    </li>
                    <li>
                        <StyledLink
                            href="/pdf/Mindaugas_Bankauskas_-_Frontend_Developer.pdf"
                            target="_blank">
                            Resume
                        </StyledLink>
                    </li>
                </ul>
            </section>
            <section className="justify-self-end">
                <Logo size={"2xl"} />
            </section>
        </footer>
    );
};

export default Footer;
