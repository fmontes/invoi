import * as React from 'react';
import styled from 'styled-components';
import theme, { rgba, transition, ThemeModel } from '../../theme';

type TextFieldProps = {
    theme: ThemeModel;
    type?: string;
    id?: string;
    error: boolean;
};

const TextFieldStyled = styled.input<TextFieldProps>`
    border: solid 2px
        ${({ theme, error }: TextFieldProps) => (error ? theme.colors.error : theme.colors.neutral)};
    border-radius: 2px;
    box-sizing: border-box;
    font-family: ${({ theme }: TextFieldProps) => theme.font.family};
    font-size: ${({ theme }: TextFieldProps) => theme.font.size.body};
    height: ${({ theme }: TextFieldProps) => theme.components.buttons.normal.height};
    padding: 0 ${({ theme }: TextFieldProps) => theme.spaces.one};
    transition: ${transition(['border', 'box-shadow'])};

    &:focus {
        border-color: ${({ theme }: TextFieldProps) => theme.colors.primary};
        box-shadow: 0 0 20px 0 ${rgba('primary', '0.2')};
    }

    &:active {
        border-color: ${({ theme }: TextFieldProps) => theme.colors.primary};
        box-shadow: 0 0 0 4px ${rgba('primary', '0.1')};
    }

    &:disabled {
        background: none;
        border-style: dotted;
        border-color: ${({ theme }: TextFieldProps) => theme.colors.disabled};
    }
`;

TextFieldStyled.defaultProps = {
    theme: theme,
    type: 'text',
    error: false
};

export function TextField(props: TextFieldProps): JSX.Element {
    return <TextFieldStyled {...props} />;
}
