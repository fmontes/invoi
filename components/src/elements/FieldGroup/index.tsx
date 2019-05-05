import * as React from 'react';
import styled from 'styled-components';
import theme, { ThemeModel } from '../../theme';
import Label from '../../blocks/Label';
import Hint from '../../blocks/Hint';

type FieldGroupProps = {
    children: React.ReactNode;
    disabled?: boolean;
    error?: boolean;
    hint?: string;
    id?: string;
    label: string;
    theme: ThemeModel;
    type?: string;
};

const FieldGroupStyled = styled.div<FieldGroupProps>`
    display: inline-flex;
    flex-direction: column;
    min-height: 90px;

    .label {
        margin-bottom: ${({ theme }: FieldGroupProps) => theme.spaces.half};
    }

    .hint {
        margin-top: ${({ theme }: FieldGroupProps) => theme.spaces.half};
    }
`;

FieldGroupStyled.defaultProps = {
    disabled: false,
    error: false,
    theme: theme
};

export function FieldGroup(props: FieldGroupProps): JSX.Element {
    return (
        <FieldGroupStyled {...props}>
            <Label {...props} className="label">
                {props.label}
            </Label>
            {props.children}
            {props.hint ? <Hint {...props} className="hint">{props.hint}</Hint> : ''}
        </FieldGroupStyled>
    );
}
