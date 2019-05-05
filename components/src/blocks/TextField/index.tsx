import * as React from 'react';
import styled from 'styled-components';
import theme, { ThemeModel } from '../../theme';
import { fieldBoxes } from '../../theme/utils';

type TextFieldProps = {
    theme: ThemeModel;
    type?: string;
    id?: string;
    error: boolean;
};

const TextFieldStyled = styled.input<TextFieldProps>`
    ${({ theme, error }: TextFieldProps) => fieldBoxes.normal(theme, error)};

    font-family: ${({ theme }: TextFieldProps) => theme.font.family};
    font-size: ${({ theme }: TextFieldProps) => theme.font.size.body};
    height: ${({ theme }: TextFieldProps) => theme.components.buttons.normal.height};
    padding: 0 ${({ theme }: TextFieldProps) => theme.spaces.one};

    &:focus {
        ${({ theme }: TextFieldProps) => fieldBoxes.focus(theme)};
    }

    &:active {
        ${({ theme }: TextFieldProps) => fieldBoxes.active(theme)};
    }

    &:disabled {
        ${({ theme }: TextFieldProps) => fieldBoxes.disabled(theme)};
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
