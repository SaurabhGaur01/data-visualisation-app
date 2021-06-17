export const SET_SELECTED_MATERIAL = 'modules/data-visualisation-app/SET_SELECTED_MATERIAL';

export const setSelectedMaterial = value => ({
    type: SET_SELECTED_MATERIAL,
    value,
});

export const selectedMaterialReducer = (state = '', action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case SET_SELECTED_MATERIAL:
            return action.value;
        default:
            return state;               
    }
};