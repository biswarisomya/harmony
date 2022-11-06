import { Id, Paranoid } from "./common";

export interface IPartnerCustomer extends Id, Paranoid {
  firstname: string;
  lastname: string | null;
  mobile: string | null;
  email: string | null;
  address: string | null;
  partnerId: string;
}
