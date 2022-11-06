import * as yup from "yup";
import {
  INVENTORY_STATUS,
  LISTING_OPTIONS,
  PACKAGING_OPTIONS,
  Type,
} from "../constants/inventory";

export const create = yup
  .object({
    packQuantity: yup
      .number()
      .typeError("Required")
      .integer()
      .required()
      .min(1)
      .max(10000),
    totalQuantity: yup.number().typeError("Required").required().min(1),
    quantityPerPack: yup
      .number()
      .typeError("Required")
      .integer()
      .required()
      .min(1)
      .max(100),
    looseQuantity: yup
      .number()
      .typeError("Required and must be a number")
      .min(0)
      .max(100)
      .lessThan(yup.ref("quantityPerPack")),
    retailPricePerPack: yup
      .number()
      .typeError("Required")
      .min(1)
      .required("Required"),
    sellingPricePerPack: yup
      .number()
      .typeError("Required")
      .min(1)
      .required("Required"),
    expiryDate: yup
      .date()
      .default(null)
      .typeError("Required")
      .min(new Date())
      .required("Required"),
    purchasePricePerPack: yup
      .number()
      .typeError("Required")
      .min(1)
      .required("Required"),
  })
  .required();

export const update = yup
  .object({
    packQuantity: yup
      .number()
      .typeError("Required")
      .integer()
      .required()
      .min(1)
      .max(10000),
    totalQuantity: yup.number().typeError("Required").required().min(0),
    quantityPerPack: yup
      .number()
      .typeError("Required")
      .integer()
      .required()
      .min(1)
      .max(100),
    looseQuantity: yup.number().typeError("Required").integer().min(0).max(100),
    retailPricePerPack: yup
      .number()
      .typeError("Required")
      .min(1)
      .required("Required"),
    sellingPricePerPack: yup
      .number()
      .typeError("Required")
      .min(1)
      .required("Required"),
    expiryDate: yup
      .date()
      .default(null)
      .typeError("Required")
      .min(new Date())
      .required("Required"),
    purchasePricePerPack: yup
      .number()
      .typeError("Required")
      .min(1)
      .required("Required"),
  })
  .required();
