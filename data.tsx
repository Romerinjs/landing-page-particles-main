import { HomeIcon, Crop, Pencil, Computer, Book, Rocket, Users } from "lucide-react";

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <Users size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    }
];

// Data about the "About Me" page
export const dataAboutPage = [
    {
        id: 1,
        title: "Sales Virtual Assistant",
        subtitle: "Boost Your Business",
        description: "Our bot is designed to optimize your sales processes, providing real-time assistance and enhancing customer experience.",
    },
    {
        id: 2,
        title: "Task Automation",
        subtitle: "Efficiency in Every Interaction",
        description: "The bot takes care of repetitive tasks, freeing up time for your team to focus on what really matters: building customer relationships.",
    },
    {
        id: 3,
        title: "24/7 Interaction",
        subtitle: "Always Available",
        description: "With our bot, your customers get instant responses at any time of day, improving satisfaction and retention.",
    },
    {
        id: 4,
        title: "Analysis and Reports",
        subtitle: "Real-Time Data",
        description: "The bot provides detailed reports on user behavior and market trends, helping you make informed decisions.",
    },
];

// Data for the counter
export const dataCounter = [
    {
        id: 0,
        endCounter: 5, // You can adjust this number
        text: "Years of experience in automation",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 200, // Adjust this number based on your statistics
        text: "Satisfied customers with the bot",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 1500, // Adjust this number based on your statistics
        text: "Interactions carried out by the bot",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 50, // Adjust this number based on your statistics
        text: "Available automation functions",
        lineRight: false,
        lineRightMobile: false,
    },
];

// Data of services offered by the bot
export const serviceData = [
    {
        icon: <Crop />, // Replace with the appropriate icon
        title: "Customer Support",
        description: "We provide instant responses and continuous support to your customers to enhance their experience.",
    },
    {
        icon: <Pencil />, // Replace with the appropriate icon
        title: "Sales Assistance",
        description: "Our bot helps guide customers through the buying process, increasing conversion rates.",
    },
    {
        icon: <Computer />, // Replace with the appropriate icon
        title: "Data Collection",
        description: "The bot collects valuable information about your customers, enabling more effective marketing strategies.",
    },
    {
        icon: <Book />, // Replace with the appropriate icon
        title: "Customer Feedback",
        description: "We collect opinions and comments from users to continuously improve the services offered.",
    },
    {
        icon: <Rocket />, // Replace with the appropriate icon
        title: "Easy Integrations",
        description: "The bot easily integrates with other platforms and tools you use, improving efficiency.",
    },
];
