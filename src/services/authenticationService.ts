import "";
import { AuthenticationModel } from "../models/classes/models";
import { httpClient } from "./httpClient";

type EmailPassword = {
  email: string;
  password: string;
};

class AuthenticationService {
  static async login(user: EmailPassword): AuthenticationModel | boolean {
    let response = await httpClient.post("", {
      email: user.email,
      password: user.password,
    });
  }
}
