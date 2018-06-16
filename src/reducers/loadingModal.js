import { LOADING_MODAL_OPEN, LOADING_MODAL_CLOSE } from '../constants';
import { createReducer } from '../utils';

const intialState = {
    visible: false,
    message: null
}

export default createReducer(intialState, {
    [LOADING_MODAL_OPEN]: (state, payload) => {
        return Object.assign({}, state, {
            visible: true,
            message: payload.message
        })
    },
    [LOADING_MODAL_CLOSE]: (state, payload) => {
        return Object.assign({}, state, intialState)
    }
});
