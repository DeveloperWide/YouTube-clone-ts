import { IUser } from "../types/user.type";

export const validateAuthBody = (obj: IUser) => {
  if (!obj.name || !obj.email || !obj.password) {
    throw new ApiError("All fields are required", 400);
  }
};
