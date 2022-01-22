import React from "react";
import styled from 'styled-components';

export interface ButtonProps {
    disabled?: boolean;
    loading?: boolean;
    size?: "small" | "middle" | "large";
    buttonType?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const StyledButton = styled.button`
    padding: 20px;
    background:  ${(props: ButtonProps) => props.buttonType === "primary" ? `#32a852` : `red`};
    color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 15px;
    cursor: pointer;
    font-size: 20px;
`;

export const Button: React.FC<ButtonProps> = ({
    onClick,
    ...props
}) => {
    return (
        <StyledButton {...props} onClick={onClick} />
    )
}