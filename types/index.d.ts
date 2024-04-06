import { LucideIcon } from "lucide-react";

export interface NavLink {
  route: string;
  icon: LucideIcon;
  label: string;
}

export interface DeleteUserParams {
  clerkId: string;
}
