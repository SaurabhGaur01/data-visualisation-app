export const SET_FILTERED_FEATURES = 'modules/data-visualisation-app/SET_FILTERED_FEATURES';
export const CLEAR_FILTERED_FEATURES = 'modules/data-visualisation-app/CLEAR_FILTERED_FEATURES';

export const setFilteredFeatures = data => ({
    type: SET_FILTERED_FEATURES,
    data,
});

export const clearFilteredFeatures = () => ({
    type: CLEAR_FILTERED_FEATURES,
});

export const filteredFeaturesReducer = (state = [], action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case SET_FILTERED_FEATURES:
            return action.data;
        case CLEAR_FILTERED_FEATURES:
            return [];
        default:
            return state;               
    }
};