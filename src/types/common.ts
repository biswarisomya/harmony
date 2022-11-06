export interface Id{
    id: string;
}

export interface Paranoid {
    createdBy ?: string;
    updatedBy ?: string;
    deletedAt ?: Date;
    createdAt ?: Date;
    updatedAt ?: Date;
}

export enum  ROUTES {
    PARTNER="partner",
    INVENTORY="inventory",
    USERS="users",
    ORDERS="orders",
    PRODUCTS= "products",
    MARKETPLACE= "marketplace",
};