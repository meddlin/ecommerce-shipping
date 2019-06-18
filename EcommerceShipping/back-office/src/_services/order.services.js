export const orderService = {
    createOrder
};

function createOrder(order) {
    setTimeout(() => {console.log('simulating server...'); return true;}, 1000);
}