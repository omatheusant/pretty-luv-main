"use server";

import prismadb from "@/lib/prismadb";

export async function getAllUsers() {
  try {
    const users = prismadb.user.findMany();
    return users;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
