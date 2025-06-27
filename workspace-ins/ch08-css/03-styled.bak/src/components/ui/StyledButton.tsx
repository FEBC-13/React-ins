import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  color?: string;
  bg?: string;
  size?: string;
}

const ButtonStyle = styled.button<ButtonProps>`
  background-color: ${ props => props.bg || '#4CAF50' } ; /* Green background */
  border: none; /* Remove borders */
  color: ${ props => props.color || 'white' }; /* White text */
  padding: 6px 18px; /* Padding */
  text-align: center; /* Center text */
  text-decoration: none; /* Remove underline */
  display: inline-block; /* Display as inline-block */
  font-size: ${ props => props.size || '16px' }; /* Font size */
  margin: 4px 2px; /* Margin */
  cursor: pointer; /* Cursor pointer */
  border-radius: 6px; /* Border radius */
`;

function Button({ children, ...rest }: ButtonProps){
  return (
    <ButtonStyle {...rest}>{ children }</ButtonStyle>
  );
}

export default Button;