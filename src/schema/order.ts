import * as yup from "yup";
import {
  INVENTORY_STATUS,
  LISTING_OPTIONS,
  PACKAGING_OPTIONS,
  Type,
} from "../constants/inventory";

export const create = yup
  .object({
    name: yup.string().required("Required").min(2),
    manufacturer: yup.string().when("listed", {
      is: true,
      then: yup.string().required("Required").min(3),
      otherwise: yup.string(),
    }),
    description: yup.string().when("listed", {
      is: true,
      then: yup.string().required("Required").min(10),
      otherwise: yup.string(),
    }),
    composition: yup.string().when("listed", {
      is: true,
      then: yup.string().required("Required").min(10),
      otherwise: yup.string(),
    }),
    partnerId: yup.string().uuid().required("Required"),
    type: yup.mixed().oneOf(Object.values(Type)).required(),
    packaging: yup.mixed().oneOf(Object.values(PACKAGING_OPTIONS)).required(),
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
      .min(1)
      .max(100)
      .lessThan(yup.ref("quantityPerPack"))
      .required("Required"),
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
    status: yup.mixed().oneOf(Object.values(INVENTORY_STATUS)).required(),
    listed: yup.boolean().required(),
    title: yup.string().when("listed", {
      is: true,
      then: yup.string().required("Required").min(3),
      otherwise: yup.string(),
    }),
    minimumQuantity: yup.number().when("listed", {
      is: true,
      then: yup
        .number()
        .typeError("Required and must be a number")
        .min(1)
        .lessThan(yup.ref("maximumQuantity"))
        .required("Required"),
      otherwise: yup.number(),
    }),
    maximumQuantity: yup.number().when(["listed"], {
      is: true,
      then: yup
        .number()
        .typeError("Required and must be a number")
        .min(1)
        .moreThan(yup.ref("minimumQuantity"))
        .required("Required"),
      otherwise: yup.number(),
    }),
    discount: yup.number().when("listed", {
      is: true,
      then: yup
        .number()
        .typeError("Required and must be a number")
        .min(0)
        .max(100)
        .required(),
      otherwise: yup.number(),
    }),
    // marketplaceStatus: yup.mixed().when("listed", {
    //   is: true,
    //   then: yup.mixed().oneOf(Object.values(STATUS)).required(),
    //   otherwise: yup.string(),
    // }),

    listing: yup.mixed().when("listed", {
      is: true,
      then: yup.mixed().oneOf(Object.values(LISTING_OPTIONS)).required(),
      otherwise: yup.string(),
    }),
  })
  .required();
