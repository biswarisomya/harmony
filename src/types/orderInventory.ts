import { Paranoid } from "./common";

export interface IOrderInventory extends Paranoid {
  orderId: string;
  inventoryId: string;
  packQuantity: number;
  totalQuantity: number;
  looseQuantity: number;
  retailPricePerPack: number;
  purchasePricePerPack: number;
  sellingPricePerPack: number;
  expiryDate: Date;
}
