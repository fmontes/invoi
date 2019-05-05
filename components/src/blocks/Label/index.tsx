import * as React from 'react';
import styled from 'styled-components';
import theme, { ThemeModel } from '../../theme';

type LabelProps = {
    children: React.ReactNode;
    disabled?: boolean;
    error?: boolean;
    htmlFor?: string;
    theme: ThemeModel;
};

const LabelStyled = styled.label<LabelProps>`
    color: ${({ theme, disabled, error }: LabelProps) => disabled ? theme.colors.disabled : error ? theme.colors.error : ''};
    font-family: ${({ theme }: LabelProps) => theme.font.family};
    font-size: ${({ theme }: LabelProps) => theme.font.size.body};
    line-height: 1.5;
`;

LabelStyled.defaultProps = {
    disabled: false,
    error: false,
    theme: theme
};

const Label: React.FC<LabelProps> = (props: LabelProps) => {
    return <LabelStyled {...props}>{props.children}</LabelStyled>;
};

export default Label;
