import { Id, Paranoid } from "./common";
import { STATUS } from "../constants/common";
import { USER_VERIFICATION_STATUS } from "../constants/user";
import { IPartner } from "./partner";
import { IRole } from "./role";
import { IAddress } from "./address";

type StatusKeys = keyof typeof STATUS;
type StatusValues = typeof STATUS[StatusKeys];
type UserVerificationStatusKeys = keyof typeof USER_VERIFICATION_STATUS;
type UserVerificationStatusValues =
  typeof USER_VERIFICATION_STATUS[UserVerificationStatusKeys];

export interface IUser extends Id, Paranoid {
  firstname: string;
  lastname: string;
  mobile: string;
  username: string;
  hashedPassword: string;
  salt: string;
  email: string | null;
  status: StatusValues;
  isPasswordUpdated: boolean;
  verification: UserVerificationStatusValues;
  Partners: IPartner[] | null;
  roleId: string;
  Role: IRole | null;
  Addresses: IAddress[] | null;
}
