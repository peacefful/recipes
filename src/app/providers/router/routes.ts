import { Home } from "@/pages/home";
import { Favorite } from "@/pages/favorite";

export const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/favorite",
    name: "favorite",
    component: Favorite,
  }
];
