"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inventory_1 = require("./inventory");
const inventoryProductBatch = require("./inventoryProductBatch");
const marketplace = require("./marketplace");
exports.default = {
    inventory: inventory_1.default,
    inventoryProductBatch,
    marketplace,
};
