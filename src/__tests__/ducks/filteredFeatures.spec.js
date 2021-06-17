import {
    setFilteredFeatures,
    clearFilteredFeatures,
    filteredFeaturesReducer,
} from '../../ducks/filteredFeatures';

describe('filteredFeatures Duck Tests', () => {
    const mockObject = "mockValue";

    const unknownAction = {
        type: 'UNKNOWN',
    }

    describe('Action Generator', () => {
        it('setFilteredFeatures should match the snapshot' , () => {
            expect(setFilteredFeatures(mockObject)).toMatchSnapshot();
        });
        it('clearFilteredFeatures should match the snapshot' , () => {
            expect(clearFilteredFeatures(mockObject)).toMatchSnapshot();
        });
    });

    describe('Reducer', () => {
        it('should return the initial state if called with undefined' , () => {
            expect(filteredFeaturesReducer()).toEqual([]);
        });
        it('should return the passed state if called with no action' , () => {
            expect(filteredFeaturesReducer(mockObject)).toEqual(mockObject);
        });
        it('should return the passed state if called with an unknown action' , () => {
            expect(filteredFeaturesReducer(mockObject, unknownAction)).toEqual(mockObject);
        });
        it('should return the value which is passed' , () => {
            expect(filteredFeaturesReducer('', setFilteredFeatures(mockObject))).toEqual(mockObject);
        });
        it('should reset the value to []' , () => {
            expect(filteredFeaturesReducer('', clearFilteredFeatures())).toEqual([]);
        });
    });
});