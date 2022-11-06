import { Id, Paranoid } from "./common";
import {
  ORDER_STATUS,
  PAYMENT_STATUS,
  PAYMENT_METHOD,
  ORDER_TYPE,
} from "../constants/order";
import { IAddress } from "./address";
import { IUser } from "./user";
import { IOrderInventory } from "./orderInventory";
import { IPartnerCustomer } from "./partnerCustomer";

type OrderStatusKeys = keyof typeof ORDER_STATUS;
type OrderStatusValues = typeof ORDER_STATUS[OrderStatusKeys];
type PaymentStatusKeys = keyof typeof PAYMENT_STATUS;
type PaymentStatusValues = typeof PAYMENT_STATUS[PaymentStatusKeys];
type PaymentMethodKeys = keyof typeof PAYMENT_METHOD;
type PaymentMethodValues = typeof PAYMENT_METHOD[PaymentMethodKeys];
type OrderTypeKeys = keyof typeof ORDER_TYPE;
type OrderTypeValues = typeof ORDER_TYPE[OrderTypeKeys];
export interface IOrder extends Id, Paranoid {
  discount: number;
  total: number;
  notes: string;
  status: OrderStatusValues;
  paymentStatus: PaymentStatusValues;
  paymentMethod: PaymentMethodValues;
  type: OrderTypeValues;
  promoCode: string;
  userId: string | null;
  addressId: string | null;
  customerId: string | null;
  Address?: IAddress;
  User?: IUser;
  OrderInventories?: IOrderInventory[];
  PartnerCustomer?: IPartnerCustomer;
}

export interface IOrderCreateForm {
  discount: number;
  total: number;
  notes: string;
  status: OrderStatusValues;
  paymentStatus: PaymentStatusValues;
  paymentMethod: PaymentMethodValues;
  type: OrderTypeValues;
  promoCode: string;
  // userId: string | null;
  // addressId: string | null;
  // customerId: string | null;
  // Address?: IAddress;
  // User?: IUser;
  // orderInventories?: IOrderInventory[];
}
