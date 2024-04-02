"use server";

import prismadb from "@/lib/prismadb";

export async function getAllUsers() {
  try {
    const users = await prismadb.user.findMany();
    if (users.length <= 0) {
      return "Nenhum usuário encontrado";
    }
    return { users };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
