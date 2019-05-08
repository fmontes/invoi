import * as React from 'react';
import styled from 'styled-components';
import theme, { ThemeModel } from '../../theme';

type ButtonProps = {
    naked?: boolean;
    disabled?: boolean;
    secondary?: boolean;
    tiny?: boolean;
    theme: ThemeModel;
    children: React.ReactNode;
};

const ButtonStyled = styled.button<ButtonProps>`
    background-color: ${({ theme, secondary, naked }: ButtonProps) =>
        naked ? 'transparent' : secondary ? theme.colors.gray : theme.colors.primary};
    border-radius: ${({ theme, tiny }: ButtonProps) => theme.base.radius[tiny ? 'tiny' : 'normal']};
    border: 0;
    color: ${({ theme, naked }: ButtonProps) =>
        naked ? theme.colors.textBody : theme.colors.white};
    font-family: ${({ theme }: ButtonProps) => theme.font.family};
    font-size: ${({ theme, tiny }: ButtonProps) => theme.font.size[tiny ? 'tiny' : 'body']};
    height: ${({ theme, tiny }: ButtonProps) =>
        theme.components.buttons[tiny ? 'tiny' : 'normal'].height};
    padding: 0 ${({ theme, tiny }: ButtonProps) => theme.spaces[tiny ? 'one' : 'two']};
    text-transform: ${({ tiny }: ButtonProps) => (tiny ? 'uppercase' : 'normal')};

    &:disabled {
        background-color: ${({ theme }: ButtonProps) => theme.colors.disabled};
    }
`;

ButtonStyled.defaultProps = {
    theme: theme
};

export function Button(props: ButtonProps): JSX.Element {
    return <ButtonStyled {...props}>{props.children}</ButtonStyled>;
}
