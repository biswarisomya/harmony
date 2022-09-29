import { Type } from "../constants/inventory";
import { Id, Paranoid } from "./common";
declare type TypeKeys = keyof typeof Type;
declare type TypeValues = typeof Type[TypeKeys];
export interface InventoryInputFormInput {
    name: string | null;
    manufacturer: string;
    description: string;
    packaging: string;
    type: TypeValues;
    packQuantity: number;
    looseQuantity: number;
    quantityPerPack: number;
    retailPricePerPack: number;
    purchasePricePerPack: number;
    composition: string;
    partnerId: string;
    sellingPricePerPack: number;
    expiryDate: Date | null;
    retailPrice: number;
    totalQuantity: number;
    status: string;
    listed: boolean;
    title: string;
    minimumQuantity: number;
    maximumQuantity: number;
    discount: number;
    listing: string;
}
export interface Inventory extends Id, Paranoid {
    packaging: string;
    composition: string;
    name: string;
    description: string;
    manufacturer: string;
    type: TypeValues;
    status: string;
    partnerId: string;
    marketplaceId: string;
    listed: boolean;
}
export {};
