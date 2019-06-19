import { orderConstants } from '../_constants';

export function order(state = {}, action) {
    switch(action.type) {
        case orderConstants.CREATE_ORDER_REQUEST:
            return Object.assign({}, ...state, {
                loading: true
            });
        case orderConstants.CREATE_ORDER_SUCCESS:
            return Object.assign({}, ...state, {
                loading: false,
                order: action.order
            });
        case orderConstants.CREATE_ORDER_FAILURE:
            return Object.assign({}, ...state, {
                loading: false,
                error: action.error
            });
        
        case orderConstants.CHECK_PRODUCT_SHIP_DATE_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                product: {}
            });
        case orderConstants.CHECK_PRODUCT_SHIP_DATE_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                product: action.product
            });
        case orderConstants.CHECK_PRODUCT_SHIP_DATE_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                error: action.error
            });
        
        default:
            return state;
    }
}