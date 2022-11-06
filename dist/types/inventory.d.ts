import { Type } from "../constants/inventory";
import { Id, Paranoid } from "./common";
import { IPartner } from "./partner";
declare type TypeKeys = keyof typeof Type;
declare type TypeValues = typeof Type[TypeKeys];
export interface IInventoryInputFormInput {
    name: string;
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
export interface IInventoryUpdateFormInput extends Id {
    name: string;
    manufacturer: string;
    description: string;
    packaging: string;
    type: TypeValues;
    purchasePricePerPack: number;
    composition: string;
    partnerId: string;
    status: string;
    listed: boolean;
}
export interface IInventory extends Id, Paranoid {
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
    Partner?: IPartner;
}
export interface IInventoryList {
    count: number;
    rows: IInventory[];
}
export {};
