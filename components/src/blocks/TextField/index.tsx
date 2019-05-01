import * as React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

type TextFieldProps = {
    theme?: any;
    type: string;
};

const TextFieldStyled = styled.input<TextFieldProps>`
    border: solid 2px ${({ theme }) => theme.colors.neutral};
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font.family};
    font-size: ${({ theme }) => theme.font.size.body};
    height: ${({ theme }) => theme.components.buttons.normal.height};
    padding: 0 ${({ theme }) => theme.spaces.one};
`;

TextFieldStyled.defaultProps = {
    theme: theme,
    type: 'text'
};

export function TextField(props: TextFieldProps): JSX.Element {
    return <TextFieldStyled {...props} />;
}
