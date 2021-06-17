import React from 'react';
import { shallow } from 'enzyme';
import { TestableFilter, mapStateToProps} from '../../components/Content/Filter/Filter';

describe('Filter Component', () => {
    let props;

    beforeEach(() =>{
        props = {
            actionHandleReset: jest.fn(),
            actionSetFilterBy: jest.fn(),
            filterBy: 'mockFilterBy',
        };
    });

    it('should render correctly', () => {
        const renderedModule = shallow(<TestableFilter {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    it('should call actionSetFilterBy when dropdown value changed but not none', () => {
        const renderedModule = shallow(<TestableFilter {...props} />);
        renderedModule.find('#filter-by').at(0).simulate('change', {target: { value: 'mockValue'}});
        expect(props.actionSetFilterBy).toHaveBeenCalledTimes(1);
        expect(props.actionSetFilterBy).toHaveBeenCalledWith('mockValue');
    });

    it('should call actionHandleReset when dropdown value changed to none', () => {
        const renderedModule = shallow(<TestableFilter {...props} />);
        renderedModule.find('#filter-by').at(0).simulate('change', {target: { value: 'none'}});
        expect(props.actionHandleReset).toHaveBeenCalledTimes(1);
    });

    describe('mapStateToProps', () => {        
        const mockedState = {
            filterBy: 'mockFilterBy',
        };

        it('should return the module state from the redux store', () => {
            const mockPropsFromRedux = mapStateToProps(mockedState);
            expect(mockPropsFromRedux).toEqual(
                {
                    filterBy: 'mockFilterBy',
                }
            )
        })
    })
});    