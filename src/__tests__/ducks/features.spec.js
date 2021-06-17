import {
    setFeatures,
    clearFeatures,
    featuresReducer,
} from '../../ducks/features';

describe('features Duck Tests', () => {
    const mockObject = "mockValue";

    const unknownAction = {
        type: 'UNKNOWN',
    }

    describe('Action Generator', () => {
        it('setFeatures should match the snapshot' , () => {
            expect(setFeatures(mockObject)).toMatchSnapshot();
        });
        it('clearFeatures should match the snapshot' , () => {
            expect(clearFeatures(mockObject)).toMatchSnapshot();
        });
    });

    describe('Reducer', () => {
        it('should return the initial state if called with undefined' , () => {
            expect(featuresReducer()).toEqual([]);
        });
        it('should return the passed state if called with no action' , () => {
            expect(featuresReducer(mockObject)).toEqual(mockObject);
        });
        it('should return the passed state if called with an unknown action' , () => {
            expect(featuresReducer(mockObject, unknownAction)).toEqual(mockObject);
        });
        it('should return the value which is passed' , () => {
            expect(featuresReducer('', setFeatures(mockObject))).toEqual(mockObject);
        });
        it('should reset the value to []' , () => {
            expect(featuresReducer('', clearFeatures())).toEqual([]);
        });
    });
});