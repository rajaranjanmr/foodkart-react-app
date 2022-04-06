import { v4 as uuid } from "uuid";
import biryaniimage from '../../assets/images/biryaniimg.jpeg'
import thaaliimage from '../../assets/images/thalis.jpeg'
import cakesimage from '../../assets/images/cakes.jpeg'
import chineseimage from '../../assets/images/chinese.webp'

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "biryani",
    image:biryaniimage,
    priceRange:"₹100* Onwards",
    description:
      "best biryanis , that you never tasted",
  },
  {
    _id: uuid(),
    categoryName: "chinese",
    image:chineseimage,
    priceRange:"₹100* Onwards",
    description:
      "best chinese that you can ever taste here",
  },
  {
    _id: uuid(),
    categoryName: "cakes",
    image:cakesimage,
    priceRange:"₹100* Onwards",
    description:
      "fresh cakes and pastereis are available here",
  },
];
