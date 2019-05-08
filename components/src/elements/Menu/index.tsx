import * as React from 'react';
import styled from 'styled-components';
import theme, { ThemeModel } from '../../theme/index';
import { MenuOption, MenuOptionsModel } from '../../blocks/MenuOption';

type MenuProps = {
    children: React.ReactNode;
    disabled?: boolean;
    theme: ThemeModel;
    options: MenuOptionsModel[];
};

const MenuStyled = styled.ul<MenuProps>`
    list-style: none;
    margin: 0;
    padding: 0;
`;

Menu.defaultProps = {
    theme: theme
};

export function Menu(props: MenuProps): JSX.Element {
    return (
        <MenuStyled {...props}>
            {props.options.map((option: MenuOptionsModel, i: number) => (
                <MenuOption key={i} {...option} />
            ))}
        </MenuStyled>
    );
}
