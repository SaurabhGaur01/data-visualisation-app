import {
    setFilterBy,
    filterByReducer,
} from '../../ducks/filterBy';

describe('filterBy Duck Tests', () => {
    const mockKey = "mockValue";

    const unknownAction = {
        type: 'UNKNOWN',
    }

    describe('Action Generator', () => {
        it('setFilterBy should match the snapshot' , () => {
            expect(setFilterBy(mockKey)).toMatchSnapshot();
        });
    });

    describe('Reducer', () => {
        it('should return the initial state if called with undefined' , () => {
            expect(filterByReducer()).toEqual('construction');
        });
        it('should return the passed state if called with no action' , () => {
            expect(filterByReducer(mockKey)).toEqual(mockKey);
        });
        it('should return the passed state if called with an unknown action' , () => {
            expect(filterByReducer(mockKey, unknownAction)).toEqual(mockKey);
        });
        it('should return the value which is passed' , () => {
            expect(filterByReducer('', setFilterBy(mockKey))).toEqual(mockKey);
        });
    });
});