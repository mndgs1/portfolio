import Link from "next/link";

const Logo = () => {
    return (
        <Link
            href={"/"}
            className="text-2xl w-10 h-10 border flex justify-center items-center hover:border-primary transition-all">
            <p className="">M</p>
        </Link>
    );
};

export default Logo;
