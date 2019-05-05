import * as React from 'react';
import styled from 'styled-components';
import theme, { ThemeModel } from '../../theme';

interface HintProps {
    children: React.ReactNode;
    disabled?: boolean;
    error: boolean;
    theme: ThemeModel;
};

const HintStyled = styled.span<HintProps>`
    color: ${({ theme, disabled, error }: HintProps) => disabled ? theme.colors.disabled : error ? theme.colors.error : ''};
    font-family: ${({ theme }: HintProps) => theme.font.family};
    font-size: ${({ theme }: HintProps) => theme.font.size.tiny};
`;

HintStyled.defaultProps = {
    disabled: false,
    error: false,
    theme: theme
};

const Hint: React.FC<HintProps> = (props: HintProps) => {
    return <HintStyled {...props}>{props.children}</HintStyled>;
}

export default Hint;
