interface Product {
  id: number;
  name: string;
  img: { src: string; alt: string };
  description: string;
  url: string;
}

export const listProducts: Product[] = [
  {
    id: 1,
    name: "Login SacGES - Latinsoft SpA",
    img: {
      src: "img/productos/img2.jpg",
      alt: "Login SacGES",
    },
    description: "",
    url: "#",
  },
  {
    id: 2,
    name: "Desktop - Latinsoft SpA",
    img: {
      src: "img/productos/img5.jpg",
      alt: "Desktop",
    },
    description: "",
    url: "#",
  },
  {
    id: 3,
    name: "Acompañamientos - Latinsoft SpA",
    img: {
      src: "img/productos/img3.jpg",
      alt: "Acompañamientos",
    },
    description: "",
    url: "#",
  },
  {
    id: 4,
    name: "Tablet - Latinsoft SpA",
    img: {
      src: "img/productos/img7.jpg",
      alt: "Tablet",
    },
    description: "",
    url: "#",
  },
  {
    id: 5,
    name: "Manager - Latinsoft SpA",
    img: {
      src: "img/productos/img1.jpg",
      alt: "Manager",
    },
    description: "",
    url: "#",
  },
  {
    id: 6,
    name: "Conflictos - Latinsoft SpA",
    img: {
      src: "img/productos/img8.jpg",
      alt: "Conflictos",
    },
    description: "",
    url: "#",
  },
  {
    id: 7,
    name: "Charla - Latinsoft SpA",
    img: {
      src: "img/productos/img6.jpg",
      alt: "Charla",
    },
    description: "",
    url: "#",
  },
  {
    id: 8,
    name: "Gantt - Latinsoft SpA",
    img: {
      src: "img/productos/img4.jpg",
      alt: "Gantt",
    },
    description: "",
    url: "#",
  },
];
