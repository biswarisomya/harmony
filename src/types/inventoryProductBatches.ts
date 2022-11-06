import { Id, Paranoid } from "./common";

export interface IInventoryProductBatch extends Id, Paranoid {
  packQuantity: number;
  totalQuantity: number;
  looseQuantity: number;
  quantityPerPack: number;
  retailPricePerPack: number;
  purchasePricePerPack: number;
  sellingPricePerPack: number;
  expiryDate: Date | null;
  inventoryId: string;
}

export interface IInventoryProductBatchFormInput {
  packQuantity: number;
  totalQuantity: number;
  looseQuantity: number;
  quantityPerPack: number;
  retailPricePerPack: number;
  purchasePricePerPack: number;
  sellingPricePerPack: number;
  expiryDate: Date | null;
}

export interface IInventoryProductBatchesList {
  count: number;
  rows: IInventoryProductBatch[];
}
