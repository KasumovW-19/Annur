export type ApartmentRooms = 1 | 2 | 3;

export type Apartment = {
  id: string;
  rooms: ApartmentRooms;
  area: number;
  price: number;
  image: string;
  title: string;
};

export const apartments: Apartment[] = [
  {
    id: "1a",
    rooms: 1,
    area: 38.4,
    price: 6_336_000,
    image: "/images/layouts/layout-1.jpg",
    title: "Студия с панорамным окном",
  },
  {
    id: "1b",
    rooms: 1,
    area: 42.1,
    price: 6_946_500,
    image: "/images/layouts/layout-2.jpg",
    title: "1-комнатная с кухней-гостиной",
  },
  {
    id: "2a",
    rooms: 2,
    area: 58.6,
    price: 9_669_000,
    image: "/images/layouts/layout-3.jpg",
    title: "2-комнатная с двумя санузлами",
  },
  {
    id: "2b",
    rooms: 2,
    area: 64.2,
    price: 10_593_000,
    image: "/images/layouts/layout-4.jpg",
    title: "2-комнатная с гардеробной",
  },
  {
    id: "3a",
    rooms: 3,
    area: 82.5,
    price: 13_612_500,
    image: "/images/layouts/layout-5.jpg",
    title: "3-комнатная семейная",
  },
  {
    id: "3b",
    rooms: 3,
    area: 91.8,
    price: 15_147_000,
    image: "/images/layouts/layout-6.jpg",
    title: "3-комнатная с мастер-спальней",
  },
];
