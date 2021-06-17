import React from 'react';
import { shallow } from 'enzyme';
import { TestableBoatRamps, mapStateToProps} from '../../components/Content/BoatRamps/BoatRamps';

describe('BoatRamps Component', () => {
    let props;

    beforeEach(() =>{
        props = {
            filteredFeatures: [
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
        };
    });

    it('should render correctly', () => {
        const renderedModule = shallow(<TestableBoatRamps {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    describe('mapStateToProps', () => {    
        const mockFilteredMaterial = [{ mockKey: 'mockValue'}]    
        const mockedState = {
            filteredFeatures: mockFilteredMaterial
        };

        it('should return the module state from the redux store', () => {
            const mockPropsFromRedux = mapStateToProps(mockedState);
            expect(mockPropsFromRedux).toEqual(
                {
                    filteredFeatures: mockFilteredMaterial,
                }
            )
        })
    })
});    