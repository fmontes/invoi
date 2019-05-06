import * as React from 'react';
import styled from 'styled-components';
import theme from '../../theme/index';
import Label from '../../blocks/Label';
import { CheckboxOrRadio, CheckboxOrRadioProps } from '../../blocks/CheckboxOrRadio';

interface CheckboxWithLabelProps extends CheckboxOrRadioProps {
    label: string;
};

const CheckboxStyled = styled(Label)`
    cursor: pointer;
    display: inline-flex;
    align-items: center;
`;

CheckboxStyled.defaultProps = {
    theme: theme,
    error: false
};

export function CheckboxWithLabel(props: CheckboxWithLabelProps): JSX.Element {
    return (
        <CheckboxStyled {...props}>
            <CheckboxOrRadio type="checkbox" {...props} />
            {props.label}
        </CheckboxStyled>
    );
}
