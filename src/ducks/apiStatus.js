import { LOADING_ERROR, LOADING_IN_PROGRESS, LOADING_SUCCESS } from '../constants/apiStatus';

export const SET_LOADING_IN_PROGRESS = 'modules/data-visualisation-app/SET_LOADING_IN_PROGRESS';
export const SET_LOADING_SUCCESS = 'modules/data-visualisation-app/SET_LOADING_SUCCESS';
export const SET_LOADING_ERROR = 'modules/data-visualisation-app/SET_LOADING_ERROR';

export const setLoadingInProgress = () => ({
    type: SET_LOADING_IN_PROGRESS,
});

export const setLoadingSuccess = () => ({
    type: SET_LOADING_SUCCESS,
});

export const setLoadingError = () => ({
    type: SET_LOADING_ERROR,
});

export const apiStatusReducer = (state = '', action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case SET_LOADING_ERROR:
            return LOADING_ERROR;
        case SET_LOADING_SUCCESS:
            return LOADING_SUCCESS;
        case SET_LOADING_IN_PROGRESS:
            return LOADING_IN_PROGRESS;
        default:
            return state;               
    }
};