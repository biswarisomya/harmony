import * as yup from "yup";
export declare const create: import("yup/lib/object").RequiredObjectSchema<{
    name: import("yup/lib/string").RequiredStringSchema<string, import("yup/lib/types").AnyObject>;
    manufacturer: yup.StringSchema<string, import("yup/lib/types").AnyObject, string>;
    description: yup.StringSchema<string, import("yup/lib/types").AnyObject, string>;
    composition: yup.StringSchema<string, import("yup/lib/types").AnyObject, string>;
    partnerId: import("yup/lib/string").RequiredStringSchema<string, import("yup/lib/types").AnyObject>;
    type: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    packaging: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    packQuantity: import("yup/lib/number").RequiredNumberSchema<number, import("yup/lib/types").AnyObject>;
    totalQuantity: import("yup/lib/number").RequiredNumberSchema<number, import("yup/lib/types").AnyObject>;
    quantityPerPack: import("yup/lib/number").RequiredNumberSchema<number, import("yup/lib/types").AnyObject>;
    looseQuantity: yup.NumberSchema<number, import("yup/lib/types").AnyObject, number>;
    retailPricePerPack: import("yup/lib/number").RequiredNumberSchema<number, import("yup/lib/types").AnyObject>;
    sellingPricePerPack: import("yup/lib/number").RequiredNumberSchema<number, import("yup/lib/types").AnyObject>;
    expiryDate: import("yup/lib/date").RequiredDateSchema<Date, import("yup/lib/types").AnyObject>;
    purchasePricePerPack: import("yup/lib/number").RequiredNumberSchema<number, import("yup/lib/types").AnyObject>;
    status: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    listed: import("yup/lib/boolean").RequiredBooleanSchema<boolean, import("yup/lib/types").AnyObject>;
    title: yup.StringSchema<string, import("yup/lib/types").AnyObject, string>;
    minimumQuantity: yup.NumberSchema<number, import("yup/lib/types").AnyObject, number>;
    maximumQuantity: yup.NumberSchema<number, import("yup/lib/types").AnyObject, number>;
    discount: yup.NumberSchema<number, import("yup/lib/types").AnyObject, number>;
    listing: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    name: import("yup/lib/string").RequiredStringSchema<string, import("yup/lib/types").AnyObject>;
    manufacturer: yup.StringSchema<string, import("yup/lib/types").AnyObject, string>;
    description: yup.StringSchema<string, import("yup/lib/types").AnyObject, string>;
    composition: yup.StringSchema<string, import("yup/lib/types").AnyObject, string>;
    partnerId: import("yup/lib/string").RequiredStringSchema<string, import("yup/lib/types").AnyObject>;
    type: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    packaging: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    packQuantity: import("yup/lib/number").RequiredNumberSchema<number, import("yup/lib/types").AnyObject>;
    totalQuantity: import("yup/lib/number").RequiredNumberSchema<number, import("yup/lib/types").AnyObject>;
    quantityPerPack: import("yup/lib/number").RequiredNumberSchema<number, import("yup/lib/types").AnyObject>;
    looseQuantity: yup.NumberSchema<number, import("yup/lib/types").AnyObject, number>;
    retailPricePerPack: import("yup/lib/number").RequiredNumberSchema<number, import("yup/lib/types").AnyObject>;
    sellingPricePerPack: import("yup/lib/number").RequiredNumberSchema<number, import("yup/lib/types").AnyObject>;
    expiryDate: import("yup/lib/date").RequiredDateSchema<Date, import("yup/lib/types").AnyObject>;
    purchasePricePerPack: import("yup/lib/number").RequiredNumberSchema<number, import("yup/lib/types").AnyObject>;
    status: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    listed: import("yup/lib/boolean").RequiredBooleanSchema<boolean, import("yup/lib/types").AnyObject>;
    title: yup.StringSchema<string, import("yup/lib/types").AnyObject, string>;
    minimumQuantity: yup.NumberSchema<number, import("yup/lib/types").AnyObject, number>;
    maximumQuantity: yup.NumberSchema<number, import("yup/lib/types").AnyObject, number>;
    discount: yup.NumberSchema<number, import("yup/lib/types").AnyObject, number>;
    listing: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
}>>;
declare const _default: {
    create: import("yup/lib/object").RequiredObjectSchema<{
        name: import("yup/lib/string").RequiredStringSchema<string, import("yup/lib/types").AnyObject>;
        manufacturer: yup.StringSchema<string, import("yup/lib/types").AnyObject, string>;
        description: yup.StringSchema<string, import("yup/lib/types").AnyObject, string>;
        composition: yup.StringSchema<string, import("yup/lib/types").AnyObject, string>;
        partnerId: import("yup/lib/string").RequiredStringSchema<string, import("yup/lib/types").AnyObject>;
        type: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        packaging: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        packQuantity: import("yup/lib/number").RequiredNumberSchema<number, import("yup/lib/types").AnyObject>;
        totalQuantity: import("yup/lib/number").RequiredNumberSchema<number, import("yup/lib/types").AnyObject>;
        quantityPerPack: import("yup/lib/number").RequiredNumberSchema<number, import("yup/lib/types").AnyObject>;
        looseQuantity: yup.NumberSchema<number, import("yup/lib/types").AnyObject, number>;
        retailPricePerPack: import("yup/lib/number").RequiredNumberSchema<number, import("yup/lib/types").AnyObject>;
        sellingPricePerPack: import("yup/lib/number").RequiredNumberSchema<number, import("yup/lib/types").AnyObject>;
        expiryDate: import("yup/lib/date").RequiredDateSchema<Date, import("yup/lib/types").AnyObject>;
        purchasePricePerPack: import("yup/lib/number").RequiredNumberSchema<number, import("yup/lib/types").AnyObject>;
        status: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        listed: import("yup/lib/boolean").RequiredBooleanSchema<boolean, import("yup/lib/types").AnyObject>;
        title: yup.StringSchema<string, import("yup/lib/types").AnyObject, string>;
        minimumQuantity: yup.NumberSchema<number, import("yup/lib/types").AnyObject, number>;
        maximumQuantity: yup.NumberSchema<number, import("yup/lib/types").AnyObject, number>;
        discount: yup.NumberSchema<number, import("yup/lib/types").AnyObject, number>;
        listing: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
        name: import("yup/lib/string").RequiredStringSchema<string, import("yup/lib/types").AnyObject>;
        manufacturer: yup.StringSchema<string, import("yup/lib/types").AnyObject, string>;
        description: yup.StringSchema<string, import("yup/lib/types").AnyObject, string>;
        composition: yup.StringSchema<string, import("yup/lib/types").AnyObject, string>;
        partnerId: import("yup/lib/string").RequiredStringSchema<string, import("yup/lib/types").AnyObject>;
        type: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        packaging: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        packQuantity: import("yup/lib/number").RequiredNumberSchema<number, import("yup/lib/types").AnyObject>;
        totalQuantity: import("yup/lib/number").RequiredNumberSchema<number, import("yup/lib/types").AnyObject>;
        quantityPerPack: import("yup/lib/number").RequiredNumberSchema<number, import("yup/lib/types").AnyObject>;
        looseQuantity: yup.NumberSchema<number, import("yup/lib/types").AnyObject, number>;
        retailPricePerPack: import("yup/lib/number").RequiredNumberSchema<number, import("yup/lib/types").AnyObject>;
        sellingPricePerPack: import("yup/lib/number").RequiredNumberSchema<number, import("yup/lib/types").AnyObject>;
        expiryDate: import("yup/lib/date").RequiredDateSchema<Date, import("yup/lib/types").AnyObject>;
        purchasePricePerPack: import("yup/lib/number").RequiredNumberSchema<number, import("yup/lib/types").AnyObject>;
        status: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
        listed: import("yup/lib/boolean").RequiredBooleanSchema<boolean, import("yup/lib/types").AnyObject>;
        title: yup.StringSchema<string, import("yup/lib/types").AnyObject, string>;
        minimumQuantity: yup.NumberSchema<number, import("yup/lib/types").AnyObject, number>;
        maximumQuantity: yup.NumberSchema<number, import("yup/lib/types").AnyObject, number>;
        discount: yup.NumberSchema<number, import("yup/lib/types").AnyObject, number>;
        listing: import("yup/lib/mixed").MixedSchema<any, import("yup/lib/types").AnyObject, any>;
    }>>;
};
export default _default;
