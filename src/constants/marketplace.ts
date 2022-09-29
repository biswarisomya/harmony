import {CREATE_UPDATE_COLUMNS, PARANOID_COLUMNS} from "./common";

export const LISTING_TYPE = {
    public :'public',
    partner : 'partner',
}

export const MARKETPLACE_STATUS =  {
    active : 'active',
    inactive : 'inactive',
}

export const MARKETPLACE_TABLE_COLUMNS  = {
    ...PARANOID_COLUMNS,
    ...CREATE_UPDATE_COLUMNS,
    title : 'id',
    minimumQuantity : 'minimumQuantity',
    maximumQuantity : 'maximumQuantity',
    discount : 'discount',
    listing : 'listing',
    status : 'status',
    inventoryId : 'inventoryId',
}