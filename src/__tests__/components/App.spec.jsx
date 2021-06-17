import React from 'react';
import { shallow } from 'enzyme';
import { TestableApp } from '../../components/App';

describe('App Component', () => {
    let props;

    beforeEach(() =>{
        props = {
            actionHandleGetData: jest.fn(),
        }
    });

    it('should render correctly', () => {
        const renderedModule = shallow(<TestableApp {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    describe('useEffect', () => {
        it('should call actionHandleGetData when component mounts', () => {
            jest.spyOn(React, 'useEffect').mockImplementationOnce(f => f());
            shallow(<TestableApp {...props} />);
            expect(props.actionHandleGetData).toHaveBeenCalledTimes(1);
        });
    })
})