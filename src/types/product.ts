import { Id, Paranoid } from "./common";
import { PRODUCT_TYPE } from "../constants/common";

type ProductTypeKeys = keyof typeof PRODUCT_TYPE;
type ProductTypeValues = typeof PRODUCT_TYPE[ProductTypeKeys];
export interface IProduct extends Id, Paranoid {
  name: string;
  description?: string | null;
  manufacturer: string;
  composition?: string;
  type: ProductTypeValues;
  partnerId?: string | null;
}
