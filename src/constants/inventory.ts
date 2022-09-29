import {CREATE_UPDATE_COLUMNS, PARANOID_COLUMNS} from "./common";

export const Type =  {
    generic : "generic",
    trademark : "trademark",
}

export const PACKAGING_OPTIONS = {
    tube: "tube",
    syringe: "syringe",
    bottle: "bottle",
    strip: "strip",
};
export const INVENTORY_STATUS  = {
    available: "available",
    out_of_stock: "out_of_stock",
    discontinued: "discontinued",
};
export const STATUS  = {
    active : "active",
    inactive : "inactive",
}

export const LISTING_OPTIONS = {
    public: "public",
    partner: "partner",
};

export const INVENTORY_TABLE_COLUMNS  = {
    ...PARANOID_COLUMNS,
    ...CREATE_UPDATE_COLUMNS,
    id : 'id',
    name : 'name',
    packaging : 'packaging',
    composition : 'composition',
    description : 'description',
    manufacturer : 'manufacturer',
    type : 'type',
    status : 'status',
    partnerId : 'partnerId',
}