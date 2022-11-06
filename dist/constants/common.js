"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROUTES = exports.PRODUCT_TYPE = exports.STATUS = exports.CREATE_UPDATE_COLUMNS = exports.PARANOID_COLUMNS = void 0;
exports.PARANOID_COLUMNS = {
    createdAt: "createdAt,",
    updatedAt: "updatedAt,",
    deletedAt: "deletedAt,",
};
exports.CREATE_UPDATE_COLUMNS = {
    createdBy: "createdBy,",
    updatedBy: "updatedBy,",
};
exports.STATUS = {
    active: "active",
    inactive: "inactive",
};
exports.PRODUCT_TYPE = {
    generic: "generic",
    trademark: "trademark",
};
exports.ROUTES = {
    PARTNER: "partner",
    INVENTORY: "inventory",
    USERS: "users",
    ORDERS: "orders",
    PRODUCTS: "products",
    MARKETPLACE: "marketplace",
};
