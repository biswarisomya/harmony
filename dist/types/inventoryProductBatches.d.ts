import { Id, Paranoid } from "./common";
export interface InventoryProductBatches extends Id, Paranoid {
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
