import * as React from 'react';
import styled from 'styled-components';
import theme, { ThemeModel } from '../../theme/index';
import { fieldBoxes } from '../../theme/utils';

type SelectProps = {
    disabled: boolean;
    error: boolean;
    id?: string;
    theme: ThemeModel;
    type?: string;
};

const SelectStyled = styled.div<SelectProps>`
    display: inline-block;
    position: relative;

    select {
        ${({ theme, error }: SelectProps) => fieldBoxes.normal(theme, error)};
        appearance: none;
        font-family: ${({ theme }: SelectProps) => theme.font.family};
        font-size: ${({ theme }: SelectProps) => theme.font.size.body};
        height: ${({ theme }: SelectProps) => theme.components.buttons.normal.height};
        padding: 0 40px 0 ${({ theme }: SelectProps) => theme.spaces.one};
        position: relative;
        color: ${({ theme, disabled, error }: SelectProps) =>
            disabled ? theme.colors.disabled : error ? theme.colors.error : theme.colors.black};

        &:not([disabled]) {
            &:focus,
            &:hover {
                ${({ theme }: SelectProps) => fieldBoxes.focus(theme)};

                & + .arrow {
                    border-top-color: ${({ theme }: SelectProps) => theme.colors.primary};
                }
            }

            &:active {
                ${({ theme }: SelectProps) => fieldBoxes.active(theme)};
            }
        }

        &:disabled {
            ${({ theme }: SelectProps) => fieldBoxes.disabled(theme)};
        }
    }

    .arrow {
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-top: 7px solid
            ${({ theme, disabled, error }: SelectProps) =>
                disabled ? theme.colors.disabled : error ? theme.colors.error : theme.colors.gray};
        height: 0;
        position: absolute;
        pointer-events: none;
        right: ${({ theme }: SelectProps) => theme.spaces.two};
        top: 50%;
        transform: translateY(-50%);
        width: 0;
    }
`;

SelectStyled.defaultProps = {
    theme: theme,
    type: 'text',
    error: false
};

export function Select(props: SelectProps): JSX.Element {
    return (
        <SelectStyled {...props}>
            <select {...props}>{props.children}</select>
            <span className="arrow" />
        </SelectStyled>
    );
}
