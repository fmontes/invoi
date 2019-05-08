import * as React from 'react';
import styled from 'styled-components';
import theme, { ThemeModel } from '../../theme/index';
import { Add } from '@material-ui/icons';

type ButtonMenuProps = {
    disabled?: boolean;
    theme: ThemeModel;
};

const ButtonMenuStyled = styled.button<ButtonMenuProps>`
    align-items: center;
    background-color: ${({ theme }: ButtonMenuProps) => theme.colors.primary};
    border-radius: 50%;
    border: 0;
    color: ${({ theme }: ButtonMenuProps) => theme.colors.white};
    display: inline-flex;
    height: 64px;
    justify-content: center;
    width: 64px;

    &:disabled {
        background-color: ${({ theme }: ButtonMenuProps) => theme.colors.disabled};
    }
`;

ButtonMenuStyled.defaultProps = {
    theme: theme
};

export function ButtonMenu(props: ButtonMenuProps): JSX.Element {
    return (
        <ButtonMenuStyled {...props}>
            <Add style={{ fontSize: 32 }} />
        </ButtonMenuStyled>
    );
}
