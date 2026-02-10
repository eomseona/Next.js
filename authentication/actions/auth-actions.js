"use server";

import { hashUserPassword } from "@/lib/hash";
import { createUser } from "@/lib/user";

export async function signup(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  let errors = {};

  if (!email.include("@")) {
    errors.email = "Please enter a valid email address.";
  }

  if (password.trim().length < 8) {
    errors.password = "Password must be at least 8 characters long.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }

  const hashedPassword = hashUserPassword(password);
  createUser(email);
}
