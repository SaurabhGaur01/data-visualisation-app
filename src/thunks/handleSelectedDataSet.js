import { setFilteredFeatures } from '../ducks/filteredFeatures';
import { getFilteredDataset } from '../utils/transformedUtils';

const handleSelectedDataSet = dataset => (dispatch, getState) => {
    const { features, filterBy } = getState();
    const filteredDataset = getFilteredDataset(features, filterBy, dataset);
    dispatch(setFilteredFeatures(filteredDataset));
}

export default handleSelectedDataSet;