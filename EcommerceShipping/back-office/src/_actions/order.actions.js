import { orderConstants } from '../_constants';
import { orderService } from '../_services';

export const orderActions = {
    save
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