import { CREATE_UPDATE_COLUMNS, PARANOID_COLUMNS } from "./common";

export const INVENTORY_PRODUCT_BATCHES_TABLE_COLUMNS = {
  ...PARANOID_COLUMNS,
  ...CREATE_UPDATE_COLUMNS,
  id: "id",
  packQuantity: "packQuantity",
  totalQuantity: "totalQuantity",
  quantityPerPack: "quantityPerPack",
  retailPricePerPack: "retailPricePerPack",
  purchasePricePerPack: "purchasePricePerPack",
  looseQuantity: "looseQuantity",
  sellingPricePerPack: "sellingPricePerPack",
  inventoryId: "inventoryId",
  expiryDate: "expiryDate",
};


