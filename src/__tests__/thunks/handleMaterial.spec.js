import handleMaterial from '../../thunks/handleMaterial';
import { setFilteredMaterial } from '../../ducks/filteredMaterial';

const mockFilteredData = [
    {id: 1, label: 'mockLabel', name: 'mockName'},
];
 
jest.mock('../../ducks/filteredMaterial', () => ({
    setFilteredMaterial: jest.fn(),
}));

jest.mock('../../utils/transformedUtils', () =>({
    getFilteredDataset: jest.fn(() => (mockFilteredData))
}));

const mockGetState = () => ({
    features: 'mockFeatures',
    filterBy: 'mockFilterBy',
});

describe('The Thunk handleMaterial', () => {
    let dispatch;
    beforeEach(() => {
        dispatch = jest.fn(x => x);
    });

    it('should set FilteredMaterial correctly', async () => {
    
        await handleMaterial('mockDataSet') (dispatch, mockGetState);
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, setFilteredMaterial());
    });
})
