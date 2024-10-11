import { StaticImageData } from "next/image";
import MountainImage1 from "./images/portfolio/johannes-andersson-UCd78vfC8vU-unsplash.jpg";
import SeaImage1 from "./images/portfolio/sean-oulashin-KMn4VEeEPR8-unsplash.jpg";
import LakeSwedenImage1 from "./images/portfolio/ines-d-anselme-IAe4R_RiB08-unsplash.jpg";
import AmericanCountyImage1 from "./images/portfolio/chalo-garcia-FFWD8Ryle_U-unsplash.jpg";
import SwimingPoolImage1 from "./images/portfolio/victor-Kz6D657YAbc-unsplash.jpg";
import DunesImage1 from "./images/portfolio/jeremy-cai-euuaAce3I-o-unsplash.jpg";

export interface PortfolioImage {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
  tripId: string;
}

export const Album: PortfolioImage[] = [
  {
    title: "My trip in the mountains",
    description:
      "I recently enjoyed a vacation in the French Alps, surrounded by breathtaking scenery. I traveled with a small group of close friends, eager to experience the mix of outdoor adventure and relaxation. \
We stayed in a charming chalet near Chamonix, waking up to stunning views of Mont Blanc every day. Our mornings were filled with hikes through lush valleys, where we discovered hidden waterfalls and peaceful alpine lakes. One day, we even took the cable car up to Aiguille du Midi for panoramic views of the snow-covered peaks.\
Afternoons were more relaxed, spent exploring local villages, trying Savoyard dishes like fondue and tartiflette, and sipping coffee at cozy cafés. We also visited some natural hot springs nearby—an amazing way to unwind after long hikes.\
The trip was a perfect blend of adventure, discovery, and quality time with friends, all surrounded by the beauty of the Alps.",
    image: MountainImage1,
    alt: "None",
    tripId: "mountain",
  },
  {
    title: "I went to Bahamas ...",
    description:
      "I recently spent an incredible vacation in the Bahamas, soaking up the sun and the laid-back island vibes. I went with a few friends, all eager for a mix of beach relaxation and island exploration.\
We stayed in Nassau, the capital, where we spent our mornings lounging on pristine white-sand beaches with crystal-clear turquoise water. One of the highlights was snorkeling at the Exumas, where we swam with colorful fish and even saw some friendly nurse sharks and wild pigs on Pig Beach! We also took a boat tour to explore smaller islands, each more beautiful than the last.",
    image: SeaImage1,
    alt: 'Photo by <a href="https://unsplash.com/@oulashin?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Sean Oulashin</a> on <a href="https://unsplash.com/photos/seashore-during-golden-hour-KMn4VEeEPR8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    tripId: "bahamas",
  },
  {
    title: "Sweden has beautiful landscapes",
    image: LakeSwedenImage1,
    alt: 'Photo by <a href="https://unsplash.com/@inesdanselme?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Inès d\'Anselme</a> on <a href="https://unsplash.com/photos/landscape-photograph-of-body-of-water-near-forest-IAe4R_RiB08?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    description:
      "We spent most of our time in Dalarna, a region known for its red-painted cottages, rolling hills, and vast lakes. Our days were filled with peaceful hikes through pine forests, and one morning we even kayaked on Lake Siljan, surrounded by stunning views of distant mountains. The calm and silence of the area were incredible.",
    tripId: "sweden",
  },
  {
    title: "Yeehaaa, come on America",
    image: AmericanCountyImage1,
    description:
      "Our days were mostly spent at Clearwater Beach, where we swam, sunbathed, and even took a sunset dolphin-watching cruise that was truly magical. We also visited Honeymoon Island State Park, where we explored nature trails and saw local wildlife, including ospreys and gopher tortoises.\
In the evenings, we enjoyed the lively atmosphere at Pier 60...",
    alt: 'Photo by <a href="https://unsplash.com/@photosbychalo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Chalo Garcia</a> on <a href="https://unsplash.com/photos/brown-wooden-bridge-near-brown-wooden-house-during-daytime-FFWD8Ryle_U?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    tripId: "america",
  },
  {
    title: "Best swimmingpool ever <3",
    image: SwimingPoolImage1,
    description:
      "We spent our days lounging by the pool, where the water seemed to merge seamlessly with the horizon. It felt surreal to swim with such breathtaking scenery all around us. The pool had submerged loungers and even a swim-up bar, so we enjoyed drinks while staying cool in the water.",
    alt: 'Photo by <a href="https://unsplash.com/@victor_g?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Victor</a> on <a href="https://unsplash.com/photos/aerial-view-of-swimming-pool-Kz6D657YAbc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    tripId: "swimingpool",
  },
  {
    title: "Dunes of Sahara",
    image: DunesImage1,
    description:
      "ventured into the Sahara Desert, an unforgettable experience filled with vast golden dunes and serene, starry nights. I traveled with a small group of friends, all eager to explore one of the most iconic landscapes in the world.\
We started our adventure in Morocco, where we joined a guided camel trek across the rolling dunes. ",
    alt: 'Photo by <a href="https://unsplash.com/@j?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jeremy Cai</a> on <a href="https://unsplash.com/photos/eight-person-riding-on-camel-in-the-desert-euuaAce3I-o?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    tripId: "dunes",
  },
];
