import StyledLink from "@/components/shared/StyledLink";
import { H3, H4 } from "@/components/typography/Headings";
import Logo from "@/components/shared/Logo";

const Footer = () => {
    return (
        <footer className="container border-t mt-2 py-16 lg:py-24 flex flex-col gap-12 md:grid md:grid-cols-4 md:gap-12 md:items-center">
            <section className="col-span-4 md:col-span-2">
                <H3 className="mb-0">Let&apos;s talk</H3>
                <StyledLink
                    href="mailto:mindaugasbankauskas@gmail.com"
                    className="text-xl lg:text-3xl font-bold">
                    mindaugasbankauskas@gmail.com
                </StyledLink>
            </section>
            <section className="md:justify-self-center">
                <H4 className="mb-0">Links</H4>
                <ul>
                    <li>
                        <StyledLink href="/">Home</StyledLink>
                    </li>
                    <li>
                        <StyledLink href="/contact">Contacts</StyledLink>
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
