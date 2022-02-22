import styled from "@emotion/styled";

type ButtonProps = {
    backColor?: string
}

const Button = styled.button<ButtonProps>`
  background-color: ${props => props.backColor ? props.backColor : 'transparent'};
  text-decoration: none;
  padding: 10px 60px;
  color: black;
  width: 100%;
  border-radius: 100px;
  border-color: darkslategrey;
  display: inline-block;
  
  &:hover {
    color: white;
    background-color: darkslategrey;
  }
`
export default Button
