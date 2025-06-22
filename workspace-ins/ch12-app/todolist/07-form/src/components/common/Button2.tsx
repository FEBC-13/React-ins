import { useFormStatus } from 'react-dom';
import heartGif from '@/assets/heart.gif';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: string;
}

interface SubmitButtonProps extends Omit<ButtonProps, 'children'> {
  children: React.ReactNode;
}

function Button({ children, type="button", color, onClick: handleClick, ...props }: ButtonProps){
  return (
    <button type={ type } onClick={ handleClick } style={{ backgroundColor: color }} className="rounded-button" { ...props }>{ children }</button>
  );
}

function SubmitButton({ children, color, ...props }: SubmitButtonProps){
  const { pending } = useFormStatus();
  return (
    <Button type="submit" color={ color } disabled={ pending } { ...props }>
      {/* { pending ? 
        <img 
          src={heartGif} 
          alt="loading" 
          style={{ width: '22px', height: '20px', verticalAlign: 'middle' }} 
        /> : 
        children 
      } */}
      { children }
    </Button>
  );
}

export { Button, SubmitButton };