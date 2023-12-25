export const getCart = (state) => state.orders.orders;
export const getSelectedOrders = (state) => state.orders.selectedOrder;
export const getIsLoadingOrders = (state) => state.orders.isLoading;
export const getErrorOrders = (state) => state.orders.error;
export const getIsOrderCreated = (state) => state.orders.isOrderCreated;
