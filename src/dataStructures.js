import AccessTimeIcon from "@mui/icons-material/AccessTime";

import avatar1 from "./images/avatar1.png";
import avatar2 from "./images/avatar2.png";
import avatar3 from "./images/avatar3.png";

const highlights = [
  {
    highlightId: 1,
    label: "Trendings",
    img: "🔥"
  },
  {
    highlightId: 2,
    label: "Biggest Gainers",
    img: "🌟"
  },
  {
    highlightId: 3,
    label: "Recently Added",
    img: <AccessTimeIcon>AccessTimeIcon</AccessTimeIcon>
  }
];

const users = [
  { id: 1, label: "User1", img: `${avatar1}` },
  { id: 2, label: "User2", img: `${avatar2}` },
  { id: 3, label: "User3", img: `${avatar3}` },
  { id: 4, label: "User4", img: `${avatar1}` },
  { id: 5, label: "User5", img: `${avatar2}` },
  { id: 6, label: "User6", img: `${avatar3}` },
  { id: 7, label: "User7", img: `${avatar1}` },
  { id: 8, label: "User8", img: `${avatar2}` },
  { id: 9, label: "User9", img: `${avatar3}` },
  { id: 10, label: "User10", img: `${avatar1}` },
  { id: 11, label: "User11", img: `${avatar2}` },
  { id: 12, label: "User12", img: `${avatar3}` }
];

const years = [
  { userId: 1, years: 8 },
  { userId: 2, years: 0 },
  { userId: 3, years: 6 },
  { userId: 4, years: 8 },
  { userId: 5, years: 0 },
  { userId: 6, years: 6 },
  { userId: 7, years: 8 },
  { userId: 8, years: 0 },
  { userId: 9, years: 6 },
  { userId: 10, years: 8 },
  { userId: 11, years: 0 },
  { userId: 12, years: 6 }
];

const totals = [
  { years: 8, total: 0 },
  { years: 0, total: 10 },
  { years: 3, total: 15 }
];

const prizes = [
  { min: 0, max: 5, price: 50, description: "stock" },
  { min: 0, max: 5, price: 500, description: "stock" },
  { min: 5, max: 10, price: 200, description: "stock" },
  { min: 10, max: 15, price: 500, description: "stock" }
];

export { users, years, totals, prizes, highlights };
