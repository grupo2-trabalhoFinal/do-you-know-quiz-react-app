import styled from "styled-components";


export const BackgroundImg = styled.div`

background-repeat: no-repeat;
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;

min-width: 100vw;
height: 10vh;

div {
    background-size: cover;
    margin-top: -2560px;
    margin-right: 25px;
}

`;

export default BackgroundImg;


export const Ranking = styled.form`

display: flex;
flex-direction: column;
gap: 28px;

ol {
  
display: flex;
flex-direction: column;

width: 812px;
height: 75px;
left: 163px;
top: 522px;
border: 1px solid black;

background: #FFFFFF;
box-shadow: -50px 80px 80px rgba(0, 0, 0, 0.25);
border-radius: 182px;

margin-top: -20px;
}

img {
  width: 62px;
  height: 62px;
  border: 1px solid black;
  border-radius: 40px 40px;
  margin-top: 5px;
  margin-left: 8px;
  
}

`;


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
