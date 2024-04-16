import styled from "styled-components";

const primaryColor = "rgb(3, 169, 244)";
const hoverColor = "rgb(247 250 252)";

export const Button = styled("div")`
    background-color: ${primaryColor};
    
    border: none;
    color: ${hoverColor};
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 10px;
    transition-duration: 0.4s;

    &:hover {
        background-color: ${hoverColor};
        border: 2px solid ${primaryColor};
        color: black;
    }

    &:focus {
        outline: none;
    }
`;


