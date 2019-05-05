import * as React from 'react';
import { FieldGroup } from './index';
import { shallow } from 'enzyme';
import { TextField } from '../../blocks/TextField';

test('FieldGroup should render', () => {
    const component = shallow(
        <FieldGroup id="email" label="Hello World">
            <TextField id="email" type="email" />
        </FieldGroup>
    );
    expect(component).toMatchSnapshot();
});

test('FieldGroup should render with hint', () => {
    const component = shallow(
        <FieldGroup hint="Hello Im the hint" id="email" label="Hello World">
            <TextField id="email" type="email" />
        </FieldGroup>
    );
    expect(component).toMatchSnapshot();
});
