import React from "react";
import styled from 'styled-components';

export interface HeaderProps {
    disabled?: boolean;
    loading?: boolean;
    size?: "small" | "middle" | "large";
}

const StyledHeader = styled.h1`
    font-size:  ${(props: HeaderProps) => props.size === "small" ? '1.2rem' : '2rem'};
`;

export const Header: React.FC<HeaderProps> = ({
    ...props
}) => {
    return (
        <StyledHeader {...props} />
    )
}