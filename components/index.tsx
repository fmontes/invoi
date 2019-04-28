import * as React from 'react';
import styled from 'styled-components';

const Main = styled.main`
    padding: 1rem;
`;

export function Layout({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <Main>
            {children}
        </Main>
    );
}
