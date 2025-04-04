import type {
  BlogContentType,
  CardItemsType,
  PostItemsType,
  TitleCategoryType,
} from "../@types/index";

import BlogOne from "../assets/BlogOne.svg";
import BlogTwo from "../assets/BlogTwo.svg";
import PostOne from "../assets/Post.svg";
import PostTwo from "../assets/PostTwo.svg";
import PostFree from "../assets/PostFree.svg";
import PostFour from "../assets/PostFour.svg";
import CardsOne from "../assets/CardsOne.svg";
import CardsTwo from "../assets/CardsTwo.svg";
import CardsFree from "../assets/CardsFree.svg";

export const titleCategory: TitleCategoryType[] = [
  {
    id: 1,
    title: "All Plants",
    label: "all-plants",
  },
  {
    id: 2,
    title: "New Arrivals",
    label: "new-arrivals",
  },
  {
    id: 3,
    title: "Sale",
    label: "sale",
  },
];

export const BlogContent: BlogContentType[] = [
  {
    id: 1,
    title: "Summer cactus  & succulents",
    descr:
      "We are an online plant shop offering a wide range of cheap and trendy plants",
    btn: "Find More",
    img: `${BlogOne}`,
  },
  {
    id: 2,
    title: "Styling Trends & much more",
    descr:
      "We are an online plant shop offering a wide range of cheap and trendy plants",
    btn: "Find More",
    img: `${BlogTwo}`,
  },
];


export const PostItems: PostItemsType[] = [
  {
    id: 1,
    img: `${PostOne}`,
    items: "September 12  I Read in 6 minutes",
    title: "Cactus & Succulent Care Tips",
    descr: "Cacti are succulents are easy care plants for any home or patio. ",
    more: "Read More",
  },
  {
    id: 2,
    img: `${PostTwo}`,
    items: "September 13  I Read in 2 minutes",
    title: "Top 10 Succulents for Your Home",
    descr: "Best in hanging baskets. Prefers medium to high light.",
    more: "Read More",
  },
  {
    id: 3,
    img: `${PostFree}`,
    items: "September 15  I Read in 3 minutes",
    title: "Cacti & Succulent Care Tips",
    descr: "Cacti and succulents thrive in containers and because most are..",
    more: "Read More",
  },
  {
    id: 4,
    img: `${PostFour}`,
    items: "September 15  I Read in 2 minutes",
    title: "Best Houseplants Room by Room",
    descr: "The benefits of houseplants are endless. In addition to..",
    more: "Read More",
  },
];


export const CardsItems:CardItemsType[] = [

  {
    id: 1,
    img: `${CardsOne}`,
    title: "Garden Care",
    descr: "We are an online plant shop offering a wide range of cheap and trendy plants.",
  },
  {
    id: 2,
    img: `${CardsTwo}`,
    title: "Plant Renovation",
    descr: "We are an online plant shop offering a wide range of cheap and trendy plants.",
  },
  {
    id: 3,
    img: `${CardsFree}`,
    title: "Watering Graden",
    descr: "We are an online plant shop offering a wide range of cheap and trendy plants.",
  },
]

