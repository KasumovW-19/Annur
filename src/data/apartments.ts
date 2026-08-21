export type ApartmentRooms = 1 | 2 | 3;

export type Apartment = {
  id: string;
  rooms: ApartmentRooms;
  area: number;
  price: number;
  downPayment: number;
  image: string;
  title: string;
  termMonths?: number;
  deferredPayment?: number;
  deferredYears?: number;
  imageFit?: "cover" | "contain";
};

export const apartments: Apartment[] = [
  {
    id: "4d",
    rooms: 1,
    area: 61,
    price: 59_226,
    downPayment: 610_000,
    image: "/images/common/new-cards/plan4.jpg",
    title: "1-комнатная",
    termMonths: 72,
    deferredPayment: 1_000_000,
    deferredYears: 5,
    imageFit: "contain",
  },
  {
    id: "4a",
    rooms: 1,
    area: 66,
    price: 65_219,
    downPayment: 660_000,
    image: "/images/common/new-cards/plan1.jpg",
    title: "1-комнатная",
    termMonths: 72,
    deferredPayment: 1_000_000,
    deferredYears: 5,
    imageFit: "contain",
  },
  {
    id: "4b",
    rooms: 2,
    area: 78,
    price: 79_602,
    downPayment: 780_000,
    image: "/images/common/new-cards/plan2.jpg",
    title: "2-комнатная",
    termMonths: 72,
    deferredPayment: 1_000_000,
    deferredYears: 5,
    imageFit: "contain",
  },
  {
    id: "4c",
    rooms: 2,
    area: 93,
    price: 97_581,
    downPayment: 930_000,
    image: "/images/common/new-cards/plan3.jpeg",
    title: "2-комнатная",
    termMonths: 72,
    deferredPayment: 1_000_000,
    deferredYears: 5,
    imageFit: "contain",
  },
];
