import { FILTER_BY_CONSTRUCTION_MATERIAL } from '../constants/filterOptions';

export const SET_FILTER_BY = 'modules/data-visualisation-app/SET_FILTER_BY';

export const setFilterBy = value => ({
    type: SET_FILTER_BY,
    value,
});

export const filterByReducer = (state = FILTER_BY_CONSTRUCTION_MATERIAL, action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case SET_FILTER_BY:
            return action.value;
        default:
            return state;               
    }
};