import { STATUS } from "../constants/common";
import { Id, Paranoid } from "./common";

type StatusKeys = keyof typeof STATUS;
type StatusValues = typeof STATUS[StatusKeys];
export interface IPartner extends Id, Paranoid {
  id: string;
  type: string[];
  name: string;
  ownedBy: string;
  registration: string;
  license: string;
  mobile: number;
  phone?: number;
  email: string;
  address: string;
  city: string;
  zipCode: string;
  status: StatusValues;
}
