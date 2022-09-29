"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MARKETPLACE_TABLE_COLUMNS = exports.MARKETPLACE_STATUS = exports.LISTING_TYPE = void 0;
const common_1 = require("./common");
exports.LISTING_TYPE = {
    public: 'public',
    partner: 'partner',
};
exports.MARKETPLACE_STATUS = {
    active: 'active',
    inactive: 'inactive',
};
exports.MARKETPLACE_TABLE_COLUMNS = Object.assign(Object.assign(Object.assign({}, common_1.PARANOID_COLUMNS), common_1.CREATE_UPDATE_COLUMNS), { title: 'id', minimumQuantity: 'minimumQuantity', maximumQuantity: 'maximumQuantity', discount: 'discount', listing: 'listing', status: 'status', inventoryId: 'inventoryId' });
