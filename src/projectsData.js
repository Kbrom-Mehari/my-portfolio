export const projects = [
    {
        id: "logistics-platform",

        title: "Memi Logistics Platform",

        status: "MVP",

        description:
            "A logistics management platform that connects shippers and carriers through a secure bidding workflow. The system supports shipment creation, carrier offers, assignment, shipment tracking, and operational management.",

        techStack: [
            "Java",
            "Spring Boot",
            "React",
            "TypeScript",
            "PostgreSQL",
            "Docker",
        ],

        github: "https://github.com/yourusername/logistics-platform",

        website: "https://memi-logistics.netlify.app",

        screenshots: [
            "/projectScreenshots/logistics/landing_image.png",
            "/projectScreenshots/logistics/register_image.png",
            "/projectScreenshots/logistics/login_image.png",
        ],

        features: [
            "JWT Authentication",
            "Shipment Management",
            "Carrier Bidding",
            "Role-Based Authorization",
            "Dashboard",
            "Responsive UI",
        ],
    },

    {
        id: "fleet-management",

        title: "Suba GPS Tracking System",

        status: "In Progress",

        description:
            "A fleet visibility platform built around Traccar that provides real-time GPS tracking, vehicle monitoring, and operational insights for organizations managing fleets.",

        techStack: [
            "Java",
            "Spring Boot",
            "Netty",
            "TimescaleDB",
            "Redis",
            "Traccar",
            "Docker",
        ],

        github: "https://github.com/yourusername/fleet-management",

        screenshots: [
            "/projectScreenshots/tracking/login_page.png",
            "/projectScreenshots/tracking/live%20tracking.png",
            "/projectScreenshots/tracking/replay.png",
            "/projectScreenshots/tracking/speed_report.png",
        ],

        features: [
            "Real-Time GPS Tracking",
            "Vehicle Registry",
            "Tracking Sessions",
            "Alert Engine",
            "Interactive Maps",
            "Device Management",
        ],
    },

    // {
    //     id: "charitylens",

    //     title: "CharityLens",

    //     status: "Completed",

    //     description:
    //         "A transparency platform that helps donors follow how their contributions are allocated through projects, campaigns, and verified donation history.",

    //     techStack: [
    //         "Java",
    //         "Spring Boot",
    //         "React",
    //         "PostgreSQL",
    //     ],

    //     github: "https://github.com/yourusername/charitylens",

    //     screenshots: [],

    //     features: [
    //         "Campaign Management",
    //         "Donation Tracking",
    //         "Digital Receipts",
    //         "Role Management",
    //     ],
    // },
];
