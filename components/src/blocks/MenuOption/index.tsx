import * as React from 'react';
import styled from 'styled-components';
import theme, { ThemeModel } from '../../theme/index';
import { transition, rgba } from '../../theme/utils';

type MenuOptionProps = {
    children: React.ReactNode;
    disabled?: boolean;
    theme: ThemeModel;
};

const MenuOptionStyled = styled.a<MenuOptionProps>`
    align-items: center;
    border: 0;
    background-color: ${({ theme, disabled }: MenuOptionProps) =>
        disabled ? rgba(theme.colors.gray, '0.06') : null};
    color: ${({ theme, disabled }: MenuOptionProps) =>
        disabled ? theme.colors.neutral : theme.colors.textBody};
    cursor: pointer;
    display: flex;
    font-family: ${({ theme }: MenuOptionProps) => theme.font.family};
    font-size: ${({ theme }: MenuOptionProps) => theme.font.size.body};
    height: 44px;
    padding: 0 ${({ theme }: MenuOptionProps) => theme.spaces.two};
    pointer-events: ${({ disabled }: MenuOptionProps) => (disabled ? 'none' : null)};
    transition: ${({ theme }: MenuOptionProps) =>
        transition(theme, ['transform', 'background-color'])};

    &:hover {
        background-color: ${({ theme }: MenuOptionProps) => rgba(theme.colors.gray, '0.06')};
    }
`;

MenuOptionStyled.defaultProps = {
    theme: theme
};

export function MenuOption(props: MenuOptionProps): JSX.Element {
    return <MenuOptionStyled {...props}>{props.children}</MenuOptionStyled>;
}
