export type ApartmentRooms = 1 | 2 | 3;

export type Apartment = {
  id: string;
  rooms: ApartmentRooms;
  area: number;
  price: number;
  downPayment: number;
  image: string;
  title: string;
};

export const apartments: Apartment[] = [
  {
    id: "1a",
    rooms: 2,
    area: 94,
    price: 116_190,
    downPayment: 940_000,
    image: "/images/common/card-1.jpeg",
    title: "2-комнатная",
  },
  {
    id: "1b",
    rooms: 1,
    area: 52,
    price: 62_327,
    downPayment: 520_000,
    image: "/images/common/card-2.jpeg",
    title: "1-комнатная",
  },
  {
    id: "2a",
    rooms: 1,
    area: 78,
    price: 93_491,
    downPayment: 780_000,
    image: "/images/common/card-3.jpeg",
    title: "1-комнатная",
  },
  {
    id: "2b",
    rooms: 1,
    area: 58,
    price: 69.519,
    downPayment: 580_000,
    image: "/images/common/card-4.jpeg",
    title: "1-комнатная",
  },

  {
    id: "3a",
    rooms: 1,
    area: 61,
    price: 73_115,
    downPayment: 610_000,
    image: "/images/common/card-5.jpeg",
    title: "1-комнатная",
  },
  {
    id: "3b",
    rooms: 1,
    area: 84,
    price: 100_683,
    downPayment: 840_000,
    image: "/images/common/card-6.jpeg",
    title: "1-комнатная",
  },
];
