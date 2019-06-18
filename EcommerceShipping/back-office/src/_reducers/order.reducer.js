import { orderConstants } from '../_constants';

export function order(state = {}, action) {
    switch(action.type) {
        case orderConstants.CREATE_ORDER_REQUEST:
            return Object.assign({}, ...state, {
                loading: true
            });
        case orderConstants.CREATE_ORDER_SUCCESS:
            return Object.assign({}, ...state, {
                loading: false
            });
        case orderConstants.CREATE_ORDER_FAILURE:
            return Object.assign({}, ...state, {
                loading: false
            });
        
        default:
            return state;
    }
}