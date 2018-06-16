import {
    API_URL,
    FETCH_DUMMY_DATA_REQUEST,
    FETCH_DUMMY_DATA_SUCCESS,
    FETCH_DUMMY_DATA_FAILURE
} from '../constants';
import { checkHttpStatus, parseJSON } from '../utils';

export function fetchDummyDataRequest() {
    return {
        type: FETCH_DUMMY_DATA_REQUEST
    };
}

export function fetchDummyDataSuccess(data) {
    return {
        type: FETCH_DUMMY_DATA_SUCCESS,
        payload: {
            data
        }
    };
}

export function fetchDummyDataFailure(errorCode, statusText) {
    return {
        type: FETCH_DUMMY_DATA_FAILURE,
        payload: {
            errorCode,
            statusText
        }
    };
}

export function fetchDummyData() {
    return (dispatch) => {
        dispatch(fetchDummyDataRequest());
        return fetch(API_URL)
            .then(checkHttpStatus)
            .then(parseJSON)
            .then((response) => {
                dispatch(fetchDummyDataSuccess(response));
            })
            .catch((error) => {
                error.response.json().then((err) => {
                    dispatch(fetchDummyDataFailure(error.response.status, err.message));
                })
                    .catch((err) => {
                        dispatch(fetchDummyDataFailure(error.response.status, error.response.statusText));
                    });
            });
    };
}
