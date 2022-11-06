import { Id } from "./common";
import { IUser } from "./user";

export interface IAddress extends Id {
  createdAt: Date;
  updatedAt: Date;
  fullName: string;
  mobile: string;
  city: string;
  address: string;
  pinCode: string;
  state: string;
  country: string;
  landmark: string | null;
  addressType: string;
  userId: string;
  User: IUser | null;
}
