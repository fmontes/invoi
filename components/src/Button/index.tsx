import * as React from 'react';
import styled from 'styled-components';
import theme from '../theme';

type ButtonProps  = {
    naked?: boolean;
    disabled?: boolean;
    secondary?: boolean;
    tiny?: boolean;
    theme?: any;
    children: React.ReactNode
};

const ButtonStyled = styled.button<ButtonProps>`
    background-color: ${({ theme, secondary, naked }) =>
        naked ? 'transparent' : secondary ? theme.colors.gray : theme.colors.primary};
    border-radius: ${({ theme, tiny }) => theme.base.radius[tiny ? 'tiny' : 'normal']};
    border: 0;
    color: ${({ theme, naked }) => (naked ? theme.colors.textBody : theme.colors.white)};
    font-family: ${({ theme }) => theme.font.family};
    font-size: ${({ theme, tiny }) => theme.font.size[tiny ? 'tiny' : 'body']};
    height: ${({ theme, tiny }) => theme.components.buttons[tiny ? 'tiny' : 'normal'].height};
    padding: 0 ${({ theme, tiny }) => theme.spaces[tiny ? 'one' : 'two']};
    text-transform: ${({ tiny }) => (tiny ? 'uppercase' : 'normal')};
    &:disabled {
        background-color: ${({ theme }) => theme.colors.disabled};
    }
`;

ButtonStyled.defaultProps = {
    theme: theme
};

export function Button(props: ButtonProps): JSX.Element {
    return <ButtonStyled {...props}>{props.children}</ButtonStyled>;
}
