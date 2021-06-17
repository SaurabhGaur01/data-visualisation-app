import {
    setFilteredMaterial,
    clearFilteredMaterial,
    filteredMaterialReducer,
} from '../../ducks/filteredMaterial';

describe('filteredMaterial Duck Tests', () => {
    const mockObject = "mockValue";

    const unknownAction = {
        type: 'UNKNOWN',
    }

    describe('Action Generator', () => {
        it('setFilteredMaterial should match the snapshot' , () => {
            expect(setFilteredMaterial(mockObject)).toMatchSnapshot();
        });
        it('clearFilteredMaterial should match the snapshot' , () => {
            expect(clearFilteredMaterial(mockObject)).toMatchSnapshot();
        });
    });

    describe('Reducer', () => {
        it('should return the initial state if called with undefined' , () => {
            expect(filteredMaterialReducer()).toEqual([]);
        });
        it('should return the passed state if called with no action' , () => {
            expect(filteredMaterialReducer(mockObject)).toEqual(mockObject);
        });
        it('should return the passed state if called with an unknown action' , () => {
            expect(filteredMaterialReducer(mockObject, unknownAction)).toEqual(mockObject);
        });
        it('should return the value which is passed' , () => {
            expect(filteredMaterialReducer('', setFilteredMaterial(mockObject))).toEqual(mockObject);
        });
        it('should reset the value to []' , () => {
            expect(filteredMaterialReducer('', clearFilteredMaterial())).toEqual([]);
        });
    });
});