import * as React from 'react';
import styled from 'styled-components';
import theme, { ThemeModel } from '../../theme/index';
import { transition, fieldBoxes } from '../../theme/utils';

export interface CheckboxOrRadioProps {
    checked: boolean;
    disabled: boolean;
    error: boolean;
    id?: string;
    name?: string;
    theme: ThemeModel;
    type: string;
};

const CheckboxOrRadioStyled = styled.input`
    height: 20px;
    margin: 0;
    padding: 0;
    position: absolute;
    width: 20px;
    z-index: 1;
    appearance: none;

    & + span {
        ${({ theme, error }: CheckboxOrRadioProps) => fieldBoxes.normal(theme, error)};
        ${({ type }: CheckboxOrRadioProps) => type === 'radio' ? 'border-radius: 50%' : null };
        display: block;
        height: 20px;
        width: 20px;
        margin-right: ${({ theme }: CheckboxOrRadioProps) => theme.spaces.one};
        position: relative;

        &:after {
            ${({ type }: CheckboxOrRadioProps) => type === 'radio' ? 'border-radius: 50%' : null };
            content: '';
            height: 10px;
            left: 50%;
            position: absolute;
            top: 50%;
            transform: scale(0) translate(-50%, -50%);
            transition: ${({ theme }: CheckboxOrRadioProps) =>
                transition(
                    theme,
                    ['transform', 'background-color'],
                    'cubic-bezier(.74,-0.29,.33,1.63)'
                )};
            width: 10px;
            transform-origin: 0 0;
        }
    }

    &:checked + span {
        border-color: ${({ theme }: CheckboxOrRadioProps) => theme.colors.primary};

        &:after {
            transform: scale(1) translate(-50%, -50%);
            background-color: ${({ theme }: CheckboxOrRadioProps) => theme.colors.primary};
        }
    }

    &:not([disabled]) {
        cursor: pointer;
        &:focus + span,
        &:hover + span {
            ${({ theme }: CheckboxOrRadioProps) => fieldBoxes.focus(theme)};
        }

        &:active + span {
            ${({ theme }: CheckboxOrRadioProps) => fieldBoxes.active(theme)};
        }
    }

    &:disabled + span {
        ${({ theme }: CheckboxOrRadioProps) => fieldBoxes.disabled(theme)};

        &:after {
            background-color: ${({ theme }: CheckboxOrRadioProps) => theme.colors.disabled};
        }
    }
`;

CheckboxOrRadioStyled.defaultProps = {
    theme: theme,
    error: false
};

export function CheckboxOrRadio(props: CheckboxOrRadioProps): JSX.Element {
    return (
        <>
            <CheckboxOrRadioStyled {...props} /> <span />
        </>
    );
}
