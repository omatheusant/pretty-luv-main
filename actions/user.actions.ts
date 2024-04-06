"use server";

import prismadb from "@/lib/prismadb";
import { DeleteUserParams } from "@/types";

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

export async function deleteUser(params: DeleteUserParams) {
  try {
    const { clerkId } = params;

    const deletedUser = await prismadb.user.delete({
      where: {
        clerkId,
      },
    });

    return { deletedUser };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
