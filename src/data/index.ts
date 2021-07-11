import Restaurant from "../assets/restaurant.jpg";
import Pasta from "../assets/pasta.jpg";
import Bruschetta from "../assets/bruschetta.jpg";
import Wine from "../assets/wine.jpg";
import Beer from "../assets/beer.jpg";

export const restaurant = {
  _id: "60ea5936fc13ae36d5000063",
  name: "Redux Restaurant",
  phone: "(123) 456-7890",
  address: "1234 Restaurant rd.",
  city: "Clearwater",
  state: "FL",
  zip: 33764,
  description: "A small TypeScript project.",
  timeOpen: "10:00am",
  timeClosed: "10:00pm",
  imgURL: Restaurant,
  __v: 0,
};

export const menu = [
  {
    _id: "60ea5936fc13ae36d5000064",
    name: "Pasta",
    cost: 25,
    storeID: "b9ad1eac-c72b-437d-b288-ba8536b1eeaa",
    description: "This is really good pasta",
    itemType: "Food",
    imgURL: Pasta,
    __v: 0,
  },
  {
    _id: "60ea5936fc13ae36d5000065",
    name: "Wine",
    cost: 7,
    storeID: "be686ae7-4b3a-491b-928f-b8508178538b",
    description: "This is a fine wine.",
    itemType: "Drink",
    imgURL: Wine,
    __v: 0,
  },
  {
    _id: "60ea5936fc13ae36d5000066",
    name: "Bruschetta",
    cost: 10,
    storeID: "857ab229-d073-44c5-9ce9-0e254a1195f8",
    description: "This is the best bruschetta.",
    itemType: "Food",
    imgURL: Bruschetta,
    __v: 0,
  },
  {
    _id: "60ea5936fc13ae36d5000067",
    name: "Beer",
    cost: 7,
    storeID: "1a49e358-cda1-4c3f-89b9-d6b3e098724b",
    description: "This is a great beer.",
    itemType: "Drink",
    imgURL: Beer,
    __v: 0,
  },
];
