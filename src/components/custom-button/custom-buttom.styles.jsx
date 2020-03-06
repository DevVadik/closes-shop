import styled, { css } from 'styled-components';

const buttonStyles = css`
  border: 1px solid black;
  background-color: black;
  color: white;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid rgb(255, 252, 252);
  &:hover {
    background-color: black;
    color: white;
    border: 1px solid rgb(0, 0, 0);
  }
  `

const googleSignInStyles = css`
  background-color: #4285f4;
  color: #ffffff;
  border: 1px solid #4285f4;

  &:hover {
    background-color: #357ae8;
    border: 1px solid #357ae8;
  }
`
const getButtonStyles = props => {
  if(props.isGoggleSignIn) {
    return googleSignInStyles
  }
  return props.inverted ? invertedButtonStyles : buttonStyles
}

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  ${getButtonStyles}
`
