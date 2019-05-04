import * as React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

import { Label } from '../../blocks/Label';
import { TextField } from '../../blocks/TextField';

type FullTextFieldProps = {
    theme?: any;
    type: string;
};

const FullTextFieldStyled = styled.div<FullTextFieldProps>`
    display: flex;
    flex-direction: column;
`;

FullTextFieldStyled.defaultProps = {
    theme: theme,
};

export function FullTextField(props: FullTextFieldProps): JSX.Element {
    return <FullTextFieldStyled><Label>Hello</Label><TextField></TextField></FullTextFieldStyled>
}
