import { STATUS } from "../constants/common";
import { Id, Paranoid } from "./common";
declare type StatusKeys = keyof typeof STATUS;
declare type StatusValues = typeof STATUS[StatusKeys];
export interface IMarketplace extends Id, Paranoid {
    title: string;
    minimumQuantity: number;
    maximumQuantity: number;
    discount: number;
    status: StatusValues;
    listing: string;
    inventoryId: string;
}
export interface IMarketplaceList {
    count: number;
    rows: IMarketplace[];
}
export interface IMarketplaceFormInput {
    title: string;
    minimumQuantity: number;
    maximumQuantity: number;
    discount: number;
    status: StatusValues;
    listing: string;
    inventoryId: string;
}
export {};
