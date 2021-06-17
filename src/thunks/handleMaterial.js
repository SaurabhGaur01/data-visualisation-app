import { setFilteredMaterial } from '../ducks/filteredMaterial';
import { getFilteredDataset } from '../utils/transformedUtils';

const handleMaterial = dataset => (dispatch, getState) => {
    const { features, filterBy } = getState();
    const filteredDataset = getFilteredDataset(features, filterBy, dataset);
    dispatch(setFilteredMaterial(filteredDataset));
}

export default handleMaterial;