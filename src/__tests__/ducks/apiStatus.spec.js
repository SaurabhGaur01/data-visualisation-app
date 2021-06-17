import {
    setLoadingSuccess,
    setLoadingInProgress,
    setLoadingError,
    apiStatusReducer,
} from '../../ducks/apiStatus';

import { 
    LOADING_ERROR, LOADING_IN_PROGRESS, LOADING_SUCCESS
} from '../../constants/apiStatus';

describe('apiStatus Duck Tests', () => {
    const mockState = 'mockKey';

    const unknownAction = {
        type: 'UNKNOWN',
    }

    describe('Action Generator', () => {
        it('setLoadingSuccess should match the snapshot' , () => {
            expect(setLoadingSuccess()).toMatchSnapshot();
        });
        it('setLoadingInProgress should match the snapshot' , () => {
            expect(setLoadingInProgress()).toMatchSnapshot();
        });
        it('setLoadingError should match the snapshot' , () => {
            expect(setLoadingError()).toMatchSnapshot();
        });
    });

    describe('Reducer', () => {
        it('should return the initial state if called with undefined' , () => {
            expect(apiStatusReducer()).toEqual("");
        });
        it('should return the passed state if called with no action' , () => {
            expect(apiStatusReducer(mockState)).toBe(mockState);
        });
        it('should return the passed state if called with an unknown action' , () => {
            expect(apiStatusReducer(mockState, unknownAction)).toBe(mockState);
        });
    });

    describe('when called with a particular action', () => {
        it('should return the value of the constant LOADING_SUCCESS' , () => {
            expect(apiStatusReducer(mockState, setLoadingSuccess()))
            .toEqual(LOADING_SUCCESS);
        });
        it('should return the value of the constant LOADING_IN_PROGRESS' , () => {
            expect(apiStatusReducer(mockState, setLoadingInProgress()))
            .toEqual(LOADING_IN_PROGRESS);
        });
        it('should return the value of the constant LOADING_ERROR' , () => {
            expect(apiStatusReducer(mockState, setLoadingError()))
            .toEqual(LOADING_ERROR);
        });
    });

})