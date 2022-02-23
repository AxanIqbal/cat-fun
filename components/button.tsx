import {styled, Button as MuiButton} from "@mui/material";


type ButtonProps = {
    backColor?: string
}

const Button = styled(MuiButton)<ButtonProps>`
  background-color: ${props => props.backColor ? props.backColor : 'transparent'};
  text-decoration: none;
  padding: 10px 60px;
  color: black;
  width: 100%;
  border-radius: 100px;
  border-color: darkslategrey;
  display: inline-block;
  transition-duration: 300ms;
  
  &:hover {
    color: whitesmoke;
    background-color: darkslategrey;
    border-color: darkslategrey;
  }
`
export default Button
