import styled from "styled-components";

export const RetryButton = styled.button`

font-size: 1.1875rem;
font-weight: 300;
line-height: 1.75rem;

text-align: center;
padding: 0.1875rem 2.6875rem;
margin-top: 20px;

border: none;
border-radius: 0.875rem;

background: ${(props) => props.backgroundColorButton || "#1E4E9D"};
color: ${(props) => props.color || "#fff"};

`

export default RetryButton