import styled from "styled-components";


export const BackgroundImg = styled.div`

background-repeat: no-repeat;
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;



min-width: 100vw;
height: 100vh;

div {
    background-size: cover;
    margin-top: -3250px;
    margin-right: 65px;
}

`;

export default BackgroundImg;




export const RetryButton = styled.button`

font-size: 1.1875rem;
  font-weight: 300;
  line-height: 1.75rem;

  text-align: center;
  padding: 0.1875rem 2.6875rem;

  border: none;
  border-radius: 0.875rem;

  background: ${(props) => props.backgroundColorButton || "#1E4E9D"};
  color: ${(props) => props.color || "#fff"};
  
`







