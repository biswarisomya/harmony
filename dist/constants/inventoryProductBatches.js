"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INVENTORY_PRODUCT_BATCHES_TABLE_COLUMNS = void 0;
const common_1 = require("./common");
exports.INVENTORY_PRODUCT_BATCHES_TABLE_COLUMNS = Object.assign(Object.assign(Object.assign({}, common_1.PARANOID_COLUMNS), common_1.CREATE_UPDATE_COLUMNS), { id: "id", packQuantity: "packQuantity", totalQuantity: "totalQuantity", quantityPerPack: "quantityPerPack", retailPricePerPack: "retailPricePerPack", purchasePricePerPack: "purchasePricePerPack", looseQuantity: "looseQuantity", sellingPricePerPack: "sellingPricePerPack", inventoryId: "inventoryId", expiryDate: "expiryDate" });
