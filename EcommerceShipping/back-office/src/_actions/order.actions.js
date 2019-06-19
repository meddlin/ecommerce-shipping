import { orderConstants } from '../_constants';
import { orderService } from '../_services';

export const orderActions = {
    save,
    checkShipDate
};

function save(order) {
    return dispatch => {
        dispatch(request(order));

        orderService.createOrder(order)
            .then(
                order => {
                    dispatch(success(order));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(order) { return { type: orderConstants.CREATE_ORDER_REQUEST, order } }
    function success(order) { return { type: orderConstants.CREATE_ORDER_SUCCESS, order } }
    function failure(error) { return { type: orderConstants.CREATE_ORDER_FAILURE, error } }
}

function checkShipDate(product) {
    return dispatch => {
        dispatch(request(product));

        orderService.checkShipDate(product)
            .then(
                product => {
                    dispatch(success(product));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(product) { return { type: orderConstants.CHECK_PRODUCT_SHIP_DATE_REQUEST, product } }
    function success(product) { return { type: orderConstants.CHECK_PRODUCT_SHIP_DATE_SUCCESS, product } }
    function failure(error) { return { type: orderConstants.CHECK_PRODUCT_SHIP_DATE_FAILURE, error } }
}