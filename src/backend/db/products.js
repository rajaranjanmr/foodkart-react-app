import { v4 as uuid } from "uuid";
import biryaniimage from '../../assets/images/biryaniimg.jpeg'
import thaaliimage from '../../assets/images/thalis.jpeg'
import cakesimage from '../../assets/images/cakes.jpeg'
import chineseimage from '../../assets/images/chinese.webp'
import vegbiryani from '../../assets/images/vegbiryani.webp'
import chickenbiryani from '../../assets/images/chickenbiryani.jpeg'
import eggbiryani from '../../assets/images/eggbiryani.jpeg'
import muttonbiryani from '../../assets/images/muttonbiryani.jpeg'
import fishbiryani from '../../assets/images/fishbiryani.jpeg'
import vegchilli from '../../assets/images/vegchilli.jpeg'
import mushroom from '../../assets/images/mushroom.jpeg'
import momos from '../../assets/images/momos.jpeg'
import babcorn from '../../assets/images/babcorn.jpeg'
import eggroll from '../../assets/images/eggroll.jpeg'
import vegroll from '../../assets/images/vegroll.jpeg'
import chickenroll from '../../assets/images/chickenroll.jpeg'

import butter from '../../assets/images/butterscotch.jpeg'
import chocochips from '../../assets/images/chocochips.jpeg'
import coffee from '../../assets/images/coffee.webp'
import creamcake from '../../assets/images/creamcake.jpeg'
import darkchoc from '../../assets/images/darkchoclate.jpeg'
import fruitcake from '../../assets/images/fruitcake.jpeg'
import icecream from '../../assets/images/icecramcake.jpeg'


/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    price: 150,
    item:"Dum Biryani",
    categoryName: "biryani",
    category:"biryani",
    image:biryaniimage,
    description:
      "best biryanis , that you never tasted",
      rating:"3",
      type:"veg",
      qty : 1,
      dis : 10,
      del : 20
  },
  {
    _id: uuid(),
    price: 200,
    item:"veg biryani",
    categoryName: "biryani",
    category:"biryani",
    image:vegbiryani,
    description:
      "best biryanis , that you never tasted",
      rating:"3",
      type:"veg",
      qty : 1,
      dis : 10,
      del : 20
  },
  {
    _id: uuid(),
    price: 150,
    item:"chicken biryani",
    categoryName: "biryani",
    category:"biryani",
    image:chickenbiryani,
    description:
      "best biryanis , that you never tasted",
      rating:"3",
      type:"veg",
      qty : 1,
      dis : 10,
      del : 20
  },
  {
    _id: uuid(),
    price: 250,
    item:"Egg Biryani",
    categoryName: "biryani",
    category:"biryani",
    image:eggbiryani,
    description:
      "best biryanis , that you never tasted",
      rating:"4",
      type:"non-veg",
      qty : 1,
      dis : 10,
      del : 20
  },
  {
    _id: uuid(),
    price: 150,
    item:"mutton biryani",
    categoryName: "biryani",
    category:"biryani",
    image:muttonbiryani,
    description:
      "best biryanis , that you never tasted" ,
      rating:"1",
      type:"non-veg",
      qty : 1,
      dis : 10,
      del : 20
  },
  //chinese
  {
    _id: uuid(),
    price: 350,
    item:"baby corn",
    categoryName: "chinese",
    category:"chinese",
    image:babcorn,
    description:
      "best biryanis , that you never tasted",
      rating:"1",
      type:"non-veg",
      qty : 1,
      dis : 10,
      del : 20
  },
  {
    _id: uuid(),
    price: 250,
    item:"veg chilli",
    categoryName: "chinese",
    category:"chinese",
    image:vegchilli,
    description:
      "best biryanis , that you never tasted",
      rating:"4",
      type:"non-veg",
      qty : 1,
      dis : 10,
      del : 20
  },
  {
    _id: uuid(),
    price: 350,
    item:"egg roll",
    categoryName: "chinese",
    category:"chinese",
    image:eggroll,
    description:
      "best biryanis , that you never tasted",
      rating:"4",
      type:"non-veg",
      qty : 1,
      dis : 10,
      del : 20
  },
  {
    _id: uuid(),
    price: 250,
    item:"veg roll",
    categoryName: "chinese",
    category:"chinese",
    image:vegroll,
    description:
      "best biryanis , that you never tasted",
      rating:"2",
      type:"gravy",
      qty : 1,
      dis : 10,
      del : 20
  },
  {
    _id: uuid(),
    price: 250,
    item:"chicken roll",
    categoryName: "chinese",
    category:"chinese",
    image:chickenroll,
    description:
      "best biryanis , that you never tasted",
      rating:"2",
      type:"gravy",
      qty : 1,
      dis : 10,
      del : 20
  },
  {
    _id: uuid(),
    price: 450,
    item:"mushroom chilli",
    categoryName: "chinese",
    category:"chinese",
    image:mushroom,
    description:
      "best biryanis , that you never tasted",
      rating:"2",
      type:"gravy",
      qty : 1,
      dis : 10,
      del : 20
  },
  {
    _id: uuid(),
    price: 150,
    item:"chow",
    categoryName: "chinese",
    category:"chinese",
    image:chineseimage,
    description:
      "best biryanis , that you never tasted",
      rating:"2",
      type:"dry",
      qty : 1,
      dis : 10,
      del : 20
  },
  //cakes
  {
    _id: uuid(),
    price: 350,
    item:"Butter Scotch",
    categoryName: "cakes",
    category:"cakes",
    image:butter,
    description:
      "best biryanis , that you never tasted",
      rating:"4",
      type:"icecream",
      qty : 1,
      dis : 10,
      del : 20
  },
  {
    _id: uuid(),
    price: 350,
    item:"ChocoChips",
    categoryName: "cakes",
    category:"cakes",
    image:chocochips,
    description:
      "best biryanis , that you never tasted",
      rating:"4",
      type:"icecream",
      qty : 1,
      dis : 10,
      del : 20
  },
  {
    _id: uuid(),
    price: 150,
    item:"coffee cake",
    categoryName: "cakes",
    category:"cakes",
    image:coffee,
    description:
      "best biryanis , that you never tasted",
      rating:"4",
      type:"icecream",
      qty : 1,
      dis : 10,
      del : 20
  },
  {
    _id: uuid(),
    price: 200,
    item:"cream cake",
    categoryName: "cakes",
    category:"cakes",
    image:creamcake,
    description:
      "best biryanis , that you never tasted",
      rating:"4",
      type:"icecream",
      qty : 1,
      dis : 10,
      del : 20
  },
  {
    _id: uuid(),
    price: 200,
    item:"dark choclate",
    categoryName: "cakes",
    category:"cakes",
    image:darkchoc,
    description:
      "best biryanis , that you never tasted",
      rating:"4",
      type:"choclate",
      qty : 1,
      dis : 10,
      del : 20
  },
  {
    _id: uuid(),
    price: 200,
    item:"fruit cake",
    categoryName: "cakes",
    category:"cakes",
    image:fruitcake,
    description:
      "best biryanis , that you never tasted",
      rating:"4",
      type:"choclate",
      qty : 1,
      dis : 10,
      del : 20
  },
  {
    _id: uuid(),
    price: 200,
    item:"icecram cake",
    categoryName: "cakes",
    category:"cakes",
    image:icecream,
    description:
      "best biryanis , that you never tasted",
      rating:"4",
      type:"vanila",
      qty : 1,
      dis : 10,
      del : 20
  },
  {
    _id: uuid(),
    price: 200,
    item:"cakes",
    categoryName: "cakes",
    category:"cakes",
    image:cakesimage,
    description:
      "best biryanis , that you never tasted",
      rating:"4",
      type:"vanila",
      qty : 1,
      dis : 10,
      del : 20
  },

];
