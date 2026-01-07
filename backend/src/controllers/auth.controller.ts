import { Request, Response } from "express";
import { IUser } from "../types/user.type";
import { validateAuthBody } from "../validators/auth.validate";
import { User } from "../models/User.model";

export const signup = async (req: Request<{}, {}, IUser>, res: Response) => {
  const { name, email, password } = req.body;

  const existing = await User.findOne({ email: email });

  if (existing) {
    return res.status(409).json({
      message: "User already Exists",
    });
  }

  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  res.status(201).json({
    message: "User Successfully Created",
    user,
  });
};

export const login = async (
  req: Request<{}, {}, Omit<IUser, "name">>,
  res: Response
) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(404).json({
      message: "User NOT Found",
    });
  }

  if (user.password !== password) {
    return res.status(400).json({
      message: "Wrong Crendtials",
    });
  }

  res.status(200).json({
    message: "User Successfully LoggedIn",
    user,
  });
};
