import * as React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import Label from '../../blocks/Label';
import { CheckboxOrRadio, CheckboxOrRadioProps } from '../../blocks/CheckboxOrRadio';

interface RadioWithLabelProps extends CheckboxOrRadioProps {
    label: string;
    name?: string;
};

const RadioStyled = styled(Label)`
    cursor: pointer;
    display: inline-flex;
    align-items: center;
`;

RadioStyled.defaultProps = {
    theme: theme,
    error: false
};

export function RadioWithLabel(props: RadioWithLabelProps): JSX.Element {
    return (
        <RadioStyled {...props}>
            <CheckboxOrRadio type="radio" {...props} />
            {props.label}
        </RadioStyled>
    );
}
