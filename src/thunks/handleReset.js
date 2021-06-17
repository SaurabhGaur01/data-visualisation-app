import { setFilteredMaterial } from '../ducks/filteredMaterial';
import { setFilteredFeatures } from '../ducks/filteredFeatures';
import { setFilterBy } from '../ducks/filterBy';
import { FILTER_BY_CONSTRUCTION_MATERIAL } from '../constants/filterOptions';

const handleReset = () => (dispatch, getState) => {
    const { features } = getState();
    dispatch(setFilteredMaterial(features));
    dispatch(setFilteredFeatures(features));
    dispatch(setFilterBy(FILTER_BY_CONSTRUCTION_MATERIAL));
}

export default handleReset;