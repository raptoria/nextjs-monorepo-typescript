import React from "react";
import styled from 'styled-components';

const StyledContainer = styled.div`
    padding: 1rem;
    text-align: center;
    display: grid;
    justify-content: center;
    align-content: center;
`;

export interface PageContainerProps {
    children: React.ReactNode;
}

export const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
    return (
        <StyledContainer>{children}</StyledContainer>
    )
}