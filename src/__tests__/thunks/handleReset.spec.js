import handleReset from '../../thunks/handleReset';
import { setFilteredMaterial } from '../../ducks/filteredMaterial';
import { setFilteredFeatures } from '../../ducks/filteredFeatures';
import { setFilterBy } from '../../ducks/filterBy';

jest.mock('../../ducks/filteredMaterial', () => ({
    setFilteredMaterial: jest.fn(),
}));

jest.mock('../../ducks/filteredFeatures', () => ({
    setFilteredFeatures: jest.fn(),
}));

jest.mock('../../ducks/filterBy', () => ({
    setFilterBy: jest.fn(),
}));

const mockGetState = () => ({
    features: 'mockFeatures',
});

describe('The Thunk handleReset', () => {
    let dispatch;
    beforeEach(() => {
        dispatch = jest.fn(x => x);
    });

    it('should reset all states when called', async () => {
    
        await handleReset() (dispatch, mockGetState);
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, setFilteredMaterial());
        expect(dispatch).toHaveBeenNthCalledWith(2, setFilteredFeatures());
        expect(dispatch).toHaveBeenNthCalledWith(3, setFilterBy());
    });
})
