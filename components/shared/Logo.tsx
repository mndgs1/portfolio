import Link from "next/link";

const Logo = () => {
    return (
        <Link href={"/"} className="">
            <button className="relative group p-2 clear-start border border- text-xl w-10 h-10 flex justify-center group items-center transition-all">
                <div className="absolute h-[1px] top-0 left-0 bg-primary w-0 z-10  group-hover:w-full transition-all duration-300"></div>
                <div className="absolute h-[1px] w-0 bottom-0 right-0 bg-primary z-10 group-hover:w-full transition-all duration-300"></div>
                <div className="absolute w-[1px] h-0 left-0 bottom-0 bg-primary z-10 group-hover:h-full transition-all duration-300"></div>
                <div className="absolute w-[1px] h-0 right-0 top-0 bg-primary z-10 group-hover:h-full transition-all duration-300 "></div>
                <p className="group-hover:text-primary-hover text-primary transition-all duration-300">
                    Mb
                </p>
            </button>
        </Link>
    );
};

export default Logo;
