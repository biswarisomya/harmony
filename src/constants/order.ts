export const ORDER_STATUS = {
  placed: "placed",
  approved: "approved",
  cancelled: "cancelled",
  awaiting_shipment: "awaiting shipment",
  shipped: "shipped",
  out_for_delivery: "out for delivery",
  delivered: "delivered",
  cannot_be_fulfilled: "cannot be fulfilled",
  fulfilled: "fulfilled",
  refunded: "refunded",
};

export const PAYMENT_STATUS = {
  pending: "pending",
  completed: "completed",
  DECLINED: "declined",
  refunded: "refunded",
  not_required: "not required",
};

export const PAYMENT_METHOD = {
  cash_on_delivery: "cash on delivery",
  debit: "debit",
  credit: "credit",
  UPI: "upi",
  cash: "cash",
};

export const ORDER_TYPE = {
  in_store: "in store",
  online: "online",
};
