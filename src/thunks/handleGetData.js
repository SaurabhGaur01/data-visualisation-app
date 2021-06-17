import axios from 'axios';
import { setFeatures } from '../ducks/features';
import { setFilteredFeatures } from '../ducks/filteredFeatures';
import { setFilteredMaterial } from '../ducks/filteredMaterial';
import { setLoadingError, setLoadingInProgress, setLoadingSuccess } from '../ducks/apiStatus';
import { getTransformedResponse } from '../utils/transformedUtils';

const handleGetData = () => async (dispatch) => {
    dispatch(setLoadingInProgress());
    try {
        const { data: { features }} = await axios.get(process.env.PUBLIC_URL +'/boat_ramps.geojson');
        const transformedResponse = getTransformedResponse(features);
        dispatch(setFeatures(transformedResponse));
        dispatch(setFilteredFeatures(transformedResponse));
        dispatch(setFilteredMaterial(transformedResponse));
        dispatch(setLoadingSuccess());
    } catch (error) {
        // handling errors gracefully if any api fails so that UI will remain clean for endusers
        // can also be used to log/report if any api fails
        dispatch(setLoadingError());
    }
}

export default handleGetData;