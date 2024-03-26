"use server";

export default async function GetAllUsers() {
  try {
    const response = await fetch("http://localhost:4000/api/flask/users");
    const users = await response.json();
    return users;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
