import * as yup from "yup";
import {
  INVENTORY_STATUS,
  LISTING_OPTIONS,
  PACKAGING_OPTIONS,
  Type,
} from "../constants/inventory";

export const create = yup
  .object({
    title: yup.string().required("Required").min(3),
    minimumQuantity: yup
      .number()
      .typeError("Required and must be a number")
      .min(1)
      .lessThan(yup.ref("maximumQuantity"))
      .required("Required"),
    maximumQuantity: yup
      .number()
      .typeError("Required and must be a number")
      .min(1)
      .moreThan(yup.ref("minimumQuantity"))
      .required("Required"),
    discount: yup
      .number()
      .typeError("Required and must be a number")
      .min(0)
      .max(100)
      .required(),
    listing: yup.mixed().oneOf(Object.values(LISTING_OPTIONS)).required(),
  })
  .required();
