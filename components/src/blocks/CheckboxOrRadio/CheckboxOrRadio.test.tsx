import * as React from 'react';
import { CheckboxOrRadio } from './index';
import { shallow } from 'enzyme';

describe('Checkbox', () => {
    test('Checkbox should render', () => {
        const component = shallow(<CheckboxOrRadio type="checkbox" />);
        expect(component).toMatchSnapshot();
    });

    test('Checkbox should render disaled', () => {
        const component = shallow(<CheckboxOrRadio disabled type="checkbox" />);
        expect(component).toMatchSnapshot();
    });

    test('Checkbox should render error', () => {
        const component = shallow(<CheckboxOrRadio error type="checkbox" />);
        expect(component).toMatchSnapshot();
    });
});

describe('Radio', () => {
    test('Radio should render', () => {
        const component = shallow(<CheckboxOrRadio type="radio" />);
        expect(component).toMatchSnapshot();
    });

    test('Radio should render disaled', () => {
        const component = shallow(<CheckboxOrRadio disabled type="radio" />);
        expect(component).toMatchSnapshot();
    });

    test('Radio should render error', () => {
        const component = shallow(<CheckboxOrRadio error type="radio" />);
        expect(component).toMatchSnapshot();
    });
});
