import handleGetData from '../../thunks/handleGetData';
import { setLoadingError, setLoadingInProgress, setLoadingSuccess } from '../../ducks/apiStatus';
import { setFeatures } from '../../ducks/features';
import { setFilteredFeatures } from '../../ducks/filteredFeatures';
import { setFilteredMaterial } from '../../ducks/filteredMaterial';
import axios from 'axios';

const mockDataForResponse = {
    data: {
        features: [
            {id: 1, label: 'mockLabel', name: 'mockName'},
        ],
    }
};

jest.mock('axios');
  
jest.mock('../../ducks/apiStatus', () => ({
    setLoadingError: jest.fn(),
    setLoadingInProgress: jest.fn(),
    setLoadingSuccess: jest.fn(),
}));

jest.mock('../../ducks/features', () => ({
    setFeatures: jest.fn(),
}));

jest.mock('../../ducks/filteredFeatures', () => ({
    setFilteredFeatures: jest.fn(),
}));

jest.mock('../../ducks/filteredMaterial', () => ({
    setFilteredMaterial: jest.fn(),
}));

jest.mock('../../utils/transformedUtils', () =>({
    getTransformedResponse: jest.fn(() => (mockDataForResponse))
}));

describe('The Thunk handleGetData', () => {
    let dispatch;
    beforeEach(() => {
        dispatch = jest.fn(x => x);
    });

    it('should call APIs successfully', async () => {
        axios.get.mockImplementation(() => Promise.resolve(mockDataForResponse));

        await handleGetData() (dispatch);
        expect(dispatch).toHaveBeenCalledTimes(5);
        expect(dispatch).toHaveBeenNthCalledWith(1, setLoadingInProgress());
        expect(dispatch).toHaveBeenNthCalledWith(2, setFeatures());
        expect(dispatch).toHaveBeenNthCalledWith(3, setFilteredFeatures());
        expect(dispatch).toHaveBeenNthCalledWith(4, setFilteredMaterial());
        expect(dispatch).toHaveBeenNthCalledWith(5, setLoadingSuccess());
        
        expect(axios.get).toHaveBeenCalledTimes(1);
    });

    it('should call setLoadingError() when any API fails', async () => {
        axios.get.mockImplementation(() => Promise.reject());
        await handleGetData() (dispatch);
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, setLoadingInProgress());
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(2, setLoadingError());       
    });
})
