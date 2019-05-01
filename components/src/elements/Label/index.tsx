import * as React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

type LabelProps = {
    theme?: any;
    children: React.ReactNode
};

const LabelStyled = styled.label<LabelProps>`
    font-family: ${({ theme }) => theme.font.family};
    font-size: ${({ theme }) => theme.font.size.body};
    line-height: 1.5rem;
`;

LabelStyled.defaultProps = {
    theme: theme
};

export function Label(props: LabelProps): JSX.Element {
    return <LabelStyled {...props}>{props.children}</LabelStyled>;
}
