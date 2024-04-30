import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
} from "../ui/card";
import Image from "next/image";
import { P } from "../typography/Paragraph";
import StyledLink from "./StyledLink";

const FeaturedProjectCard = () => {
    return (
        <Card className="h-96 hover:border-primary grid grid-cols-2 group overflow-hidden">
            <div>
                <CardHeader>
                    <CardTitle className="group-hover:underline">
                        Holidaze
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <P variant={"muted"}>
                        asdasdas dasda sdasd asd asd asd asd asd asd
                    </P>
                </CardContent>
                <CardFooter>
                    <StyledLink href="#">Read More</StyledLink>
                </CardFooter>
            </div>
            <div className="">
                <Image
                    src={
                        "/img/holidaze/holidaze-eight.vercel.app_holidaze_properties_dea387d8-01de-4b13-945c-3b8cd5798ae5(iPhone XR).png"
                    }
                    alt=""
                    width={300}
                    height={800}
                    className="object-cover w-full h-full transform group-hover:-translate-y-2/4 delay-500 duration-1000 transition-all"
                />
            </div>
        </Card>
    );
};

export default FeaturedProjectCard;
