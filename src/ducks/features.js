export const SET_FEATURES = 'modules/data-visualisation-app/SET_FEATURES';
export const CLEAR_FEATUREs = 'modules/data-visualisation-app/CLEAR_FEATUREs';

export const setFeatures = data => ({
    type: SET_FEATURES,
    data,
});

export const clearFeatures = () => ({
    type: CLEAR_FEATUREs,
});

export const featuresReducer = (state = [], action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case SET_FEATURES:
            return action.data;
        case CLEAR_FEATUREs:
            return [];
        default:
            return state;               
    }
};