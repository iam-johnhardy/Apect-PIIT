import img1 from "../assets/img1.webp";
import epi1 from "../assets/epi1.jpg";
import icon from "../assets/vite.svg"

export const movie = {

    title: "WHEN THE MONSTERS RETURN",

    description:
        "Years  a group of heroes defeated a horde of monsters that terrorized Millfield, the town is thrown into chaos once again when the creatures return with renewed ferocity.",

    rating: 1,

    image: img1,
    icons:icon,
        //"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"

    seasons: [

        {
            id: 1,
            name: "Season 1"
        },

        {
            id: 2,
            name: "Season 2"
        },

        {
            id: 3,
            name: "Season 3"
        }

    ],

    episodes: [

        {
            id:1,
            title:"Episode 1: I heard a scream",
            image: epi1
            //"https://picsum.photos/300/180?1"
        },

        {
            id:2,
            title:"Episode 2: Run",
            image:"https://picsum.photos/300/180?2"
        },

        {
            id:3,
            title:"Episode 3: Stop right there",
            image:"https://picsum.photos/300/180?3"
        },

        {
            id:4,
            title:"Episode 4: The Gods are coming",
            image:"https://picsum.photos/300/180?4"
        },

        {
            id:5,
            title:"Episode 5: We're dead!",
            image:"https://picsum.photos/300/180?5"
        }

    ]

}