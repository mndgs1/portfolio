interface Project {
    id: number;
    title: string;
    description: string[];
    status: string;
    grade: string;
    image: string;
    stacks: Stack[];
    links: {
        demo: string;
        github: string;
    };
}

interface Stack {
    name: string;
    href: string;
    logo: {
        element: React.ComponentType<IconBaseProps>;
        color: string;
    };
}

const logos = {
    react: {
        name: "React",
        href: "https://reactjs.org/",
        logo: {
            element: SiReact,
            color: "#61DAFB",
        },
    },
    typescript: {
        name: "TypeScript",
        href: "https://www.typescriptlang.org/",
        logo: {
            element: SiTypescript,
            color: "#3178C6",
        },
    },
    tailwind: {
        name: "Tailwind CSS",
        href: "https://tailwindcss.com/",
        logo: {
            element: SiTailwindcss,
            color: "#38B2AC",
        },
    },
    reactRouter: {
        name: "React Router",
        href: "https://reactrouter.com/",
        logo: {
            element: SiReactrouter,
            color: "#CA4245",
        },
    },
    reactQuery: {
        name: "React Query",
        href: "https://react-query.tanstack.com/",
        logo: {
            element: SiReactquery,
            color: "#FF0080",
        },
    },
    javascript: {
        name: "Javascript",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        logo: {
            element: SiJavascript,
            color: "#F7DF1E",
        },
    },
    redux: {
        name: "Redux Toolkit",
        href: "https://redux-toolkit.js.org/",
        logo: {
            element: SiRedux,
            color: "#764ABC",
        },
    },
};

const projects: Project[] = [
    {
        id: 1,
        title: "Holidaze",
        description: [
            "A bookings website where a user can book a property, list a property, and manage bookings. The project is using Noroff API.",
            "If you want to test the website, you can use the following credentials:",
            "Email: MinBan66364@stud.noroff.no",
            "Password: 12341234",
        ],
        status: "Done",
        grade: "A",
        image: "/static/images/Holidaze.png",
        stacks: [
            logos.react,
            logos.typescript,
            logos.tailwind,
            logos.reactRouter,
            logos.reactQuery,
        ],
        links: {
            demo: "https://holidaze-mndgs1s-projects.vercel.app/",
            github: "https://github.com/mndgs1/Holidaze",
        },
    },
    {
        id: 2,
        title: "weSell",
        description: [
            "My first React project using Tailwind, Typescript, React & Redux.",
        ],
        status: "Done",
        grade: "A",
        image: "/static/images/weSell.png",
        stacks: [logos.react, logos.typescript, logos.tailwind, logos.redux],
        links: {
            demo: "https:///phenomenal-haupia-b7247b.netlify.app/",
            github: "https://github.com/mndgs1/jsframeworks-course-assignment",
        },
    },
    {
        id: 3,
        title: "iTrade",
        description: [
            "A fictional auction website using NOROFF Api. The code is written in plain javascript trying to emulate a framework. HTML, page builder scripts, components is all built with plain Javascript.",
        ],
        status: "Done",
        grade: "A",
        image: "/static/images/iTrade.png",
        stacks: [logos.javascript, logos.tailwind],
        links: {
            demo: "https://itrade-six.vercel.app/",
            github: "https://github.com/mndgs1/itrade",
        },
    },
];
