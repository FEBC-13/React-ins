import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  $color?: string;
  $bg?: string;
  $size?: string;
  variant?: 'basic' | 'cancel' | 'confirm';
}

const BasicButtonStyle = styled.button<ButtonProps>`
  background-color: ${ (props) => props.$bg || 'gray' };
  border: none;
  color: ${ props => props.$color || 'black' };
  padding: 6px 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: ${ props => props.$size || '16px' };
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 6px;
`;

const CancelButtonStyle = styled(BasicButtonStyle)`
  background-color: red;
  color: white;
`;

const ConfirmButtonStyle = styled(BasicButtonStyle)`
  background-color: blue;
  color: white;
`;

function Button({ children, variant = 'basic', $color, $bg, $size, ...rest }: ButtonProps){
  // Transient Props: styled-components에서 사용하는 속성(DOM 속성이 아닌 속성)
  // $ prefix가 붙은 props는 자동으로 DOM에 전달되지 않음
  const styledProps = { $color, $bg, $size };
  
  switch (variant) {
    case 'confirm':
      return <ConfirmButtonStyle {...rest} {...styledProps}>{ children }</ConfirmButtonStyle>;
    case 'cancel':
      return <CancelButtonStyle {...rest} {...styledProps}>{ children }</CancelButtonStyle>;
    case 'basic':
    default:
      return <BasicButtonStyle {...rest} {...styledProps}>{ children }</BasicButtonStyle>;
  }
}

export default Button;