export const SET_FILTERED_MATERIAL = 'modules/data-visualisation-app/SET_FILTERED_MATERIAL';
export const CLEAR_FILTERED_MATERIAL = 'modules/data-visualisation-app/CLEAR_FILTERED_MATERIAL';

export const setFilteredMaterial = data => ({
    type: SET_FILTERED_MATERIAL,
    data,
});

export const clearFilteredMaterial = () => ({
    type: CLEAR_FILTERED_MATERIAL,
});

export const filteredMaterialReducer = (state = [], action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case SET_FILTERED_MATERIAL:
            return action.data;
        case CLEAR_FILTERED_MATERIAL:
            return [];
        default:
            return state;               
    }
};