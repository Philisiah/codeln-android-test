import {
    FETCH_DUMMY_DATA_REQUEST,
    FETCH_DUMMY_DATA_SUCCESS,
    FETCH_DUMMY_DATA_FAILURE
} from '../constants';
import { createReducer } from '../utils';

const initialState = {
    isFetching: false,
    isFetched: false,
    data: null,
    statusText: null
}

export default createReducer(initialState, {
    [FETCH_DUMMY_DATA_REQUEST]: (state, payload) => {
        return {
            ...state,
            isFetching: true
        }
    },
    [FETCH_DUMMY_DATA_SUCCESS]: (state, payload) => {
        return {
            ...state,
            isFetching: false,
            isFetched: true,
            data: payload.data,
            statusText: 'Fetched dummy data successfully'
        }
    },
    [FETCH_DUMMY_DATA_FAILURE]: (state, payload) => {
        return {
            ...state,
            isFetching: false,
            isFetched: false,
            data: null,
            statusText: `Error Occured: ${payload.errorCode} - ${payload.statusText}`
        }
    }
})
