import React from 'react';
import { shallow } from 'enzyme';
import { TestableConstructionMaterial, mapStateToProps} from '../../components/Content/Filter/ConstructionMaterial';

describe('ConstructionMaterial Component', () => {
    let props;

    beforeEach(() =>{
        props = {
            actionHandleSelectedDataSet: jest.fn(),
            filteredMaterial: [
                {
                    rowID: 1,
                    type: "mockType",
                    material: "mockMaterial",
                    area: 150.25,
                    status: "mockStatus",
                    assetNumb: "mockAsset",
                    owner: "mockOwner",
                },
            ],
            filterBy: 'mockValue',
        };
    });

    it('should render correctly', () => {
        const renderedModule = shallow(<TestableConstructionMaterial {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    it('should render correctly when filterBy value is construction', () => {
        props.filterBy = 'construction';
        const renderedModule = shallow(<TestableConstructionMaterial {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });
    
    describe('mapStateToProps', () => {    
        const mockFilteredMaterial = [{ mockKey: 'mockValue'}]    
        const mockedState = {
            filterBy: 'mockFilterBy',
            filteredMaterial: mockFilteredMaterial
        };

        it('should return the module state from the redux store', () => {
            const mockPropsFromRedux = mapStateToProps(mockedState);
            expect(mockPropsFromRedux).toEqual(
                {
                    filterBy: 'mockFilterBy',
                    filteredMaterial: mockFilteredMaterial,
                }
            )
        })
    })
});    