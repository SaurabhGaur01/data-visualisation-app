import { combineReducers } from 'redux';
import { featuresReducer as features } from '../ducks/features';
import { apiStatusReducer as apiStatus } from '../ducks/apiStatus';
import { filterByReducer as filterBy } from '../ducks/filterBy';
import { filteredFeaturesReducer as filteredFeatures } from '../ducks/filteredFeatures';
import { selectedMaterialReducer as selectedMaterial } from '../ducks/selectedMaterial';
import { filteredMaterialReducer as filteredMaterial } from '../ducks/filteredMaterial';

export default combineReducers({
    features,
    apiStatus,
    filterBy,
    filteredFeatures,
    selectedMaterial,
    filteredMaterial,
});    