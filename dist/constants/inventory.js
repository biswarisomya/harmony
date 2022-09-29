"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INVENTORY_TABLE_COLUMNS = exports.LISTING_OPTIONS = exports.STATUS = exports.INVENTORY_STATUS = exports.PACKAGING_OPTIONS = exports.Type = void 0;
const common_1 = require("./common");
exports.Type = {
    generic: "generic",
    trademark: "trademark",
};
exports.PACKAGING_OPTIONS = {
    tube: "tube",
    syringe: "syringe",
    bottle: "bottle",
    strip: "strip",
};
exports.INVENTORY_STATUS = {
    available: "available",
    out_of_stock: "out_of_stock",
    discontinued: "discontinued",
};
exports.STATUS = {
    active: "active",
    inactive: "inactive",
};
exports.LISTING_OPTIONS = {
    public: "public",
    partner: "partner",
};
exports.INVENTORY_TABLE_COLUMNS = Object.assign(Object.assign(Object.assign({}, common_1.PARANOID_COLUMNS), common_1.CREATE_UPDATE_COLUMNS), { id: 'id', name: 'name', packaging: 'packaging', composition: 'composition', description: 'description', manufacturer: 'manufacturer', type: 'type', status: 'status', partnerId: 'partnerId' });
