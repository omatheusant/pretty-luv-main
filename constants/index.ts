import { NavLink } from "@/types";
import { CropIcon, LayoutGrid, Smile } from "lucide-react";

export const navLinks: NavLink[] = [
  {
    label: "Feed",
    icon: LayoutGrid,
    route: "/",
  },
  {
    label: "Studio",
    icon: CropIcon,
    route: "/studio",
  },
  {
    label: "Perfil",
    icon: Smile,
    route: "/profile",
  },
];
