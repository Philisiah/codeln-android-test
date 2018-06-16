import { LOADING_MODAL_OPEN, LOADING_MODAL_CLOSE } from '../constants';

export function openLoadingModal(message) {
    return {
        type: LOADING_MODAL_OPEN,
        payload: {
            visible: true,
            message
        }
    }
}

export function closeLoadingModal() {
    return {
        type: LOADING_MODAL_CLOSE,
        payload: {
            visible: false
        }
    }
}