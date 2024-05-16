import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Toaster } from "@/components/ui/sonner";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "Mindaugas Bankauskas Front-End Developer",
    description:
        "Welcome to Mindaugas Bankauskas Front-End developer portfolio website!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "min-h-screen font-sans antialiased flex flex-col justify-between bg-gradient snap-y scroll-smooth",
                    fontSans.variable
                )}>
                <Header />
                <main className="grow container">{children}</main>
                <Footer />
                <Toaster />
            </body>
        </html>
    );
}
