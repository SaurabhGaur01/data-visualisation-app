import handleSelectedDataSet from '../../thunks/handleSelectedDataSet';
import { setFilteredFeatures } from '../../ducks/filteredFeatures';

jest.mock('../../ducks/filteredFeatures', () => ({
    setFilteredFeatures: jest.fn(),
}));

const mockFilteredData = [
    {id: 1, label: 'mockLabel', name: 'mockName'},
];

jest.mock('../../utils/transformedUtils', () =>({
    getFilteredDataset: jest.fn(() => (mockFilteredData))
}));

const mockGetState = () => ({
    features: 'mockFeatures',
    filterBy: 'mockFilterBy',
});

describe('The Thunk handleSelectedDataSet', () => {
    let dispatch;
    beforeEach(() => {
        dispatch = jest.fn(x => x);
    });

    it('should set filtered features when called', async () => {
    
        await handleSelectedDataSet() (dispatch, mockGetState);
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, setFilteredFeatures());
    });
})
