import {Metadata, MetadataRoute} from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Animila",
        short_name: "Animila",
        orientation: "portrait-primary",
        description: "Fullstack-разработчик занимающийся комплексной работой над сайтом: backend, frontend, базы данных, DevOps, администрирование, микросервисы",
        icons: [
            {
                src: "/assets/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png"
            },
            {
                src: "/assets/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png"
            },
            {
                src: "/assets/favicon-32x32.png",
                sizes: "32x32",
                type: "image/png"
            },
            {
                src: "/assets/favicon-16x16.png",
                sizes: "16x16",
                type: "image/png"
            }
        ],
        start_url: ".",
        theme_color: "#ffbc00",
        background_color: "#ffc90b",
        display: "standalone",
        id: "Animila",
        dir: "auto",
        lang: "ru",
        categories: [
            "business",
            "education",
            "magazines",
            "navigation",
            "productivity",
            "utilities"
        ],
        display_override: [
            "fullscreen",
        ]
    }
}
