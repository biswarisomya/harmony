import { STATUS } from "../constants/inventory";
import { Id, Paranoid } from "./common";

type StatusKeys = keyof typeof STATUS;
type StatusValues = typeof STATUS[StatusKeys];
export interface Marketplace extends Id, Paranoid {
  title: string;
  minimumQuantity: number;
  maximumQuantity: number;
  discount: number;
  status: StatusValues;
  listing: string;
  inventoryId: string;
}
