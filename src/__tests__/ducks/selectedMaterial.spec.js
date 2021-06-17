import {
    setSelectedMaterial,
    selectedMaterialReducer,
} from '../../ducks/selectedMaterial';

describe('selectedMaterial Duck Tests', () => {
    const mockKey = "mockValue";

    const unknownAction = {
        type: 'UNKNOWN',
    }

    describe('Action Generator', () => {
        it('setSelectedMaterial should match the snapshot' , () => {
            expect(setSelectedMaterial(mockKey)).toMatchSnapshot();
        });
    });

    describe('Reducer', () => {
        it('should return the initial state if called with undefined' , () => {
            expect(selectedMaterialReducer()).toEqual('');
        });
        it('should return the passed state if called with no action' , () => {
            expect(selectedMaterialReducer(mockKey)).toEqual(mockKey);
        });
        it('should return the passed state if called with an unknown action' , () => {
            expect(selectedMaterialReducer(mockKey, unknownAction)).toEqual(mockKey);
        });
        it('should return the value which is passed' , () => {
            expect(selectedMaterialReducer('', setSelectedMaterial(mockKey))).toEqual(mockKey);
        });
    });
});