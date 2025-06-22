import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  type?: "button" | "submit" | "reset";
  color?: string;
}

interface SubmitButtonProps extends Omit<ButtonProps, 'children'> {
  children: string;
  isSubmitting?: boolean;
}

function Button({ children, type="button", color, onClick: handleClick, ...props }: ButtonProps){
  return (
    <button type={ type } onClick={ handleClick } style={{ backgroundColor: color }} className="rounded-button" { ...props }>{ children }</button>
  );
}

function SubmitButton({ children, color, isSubmitting, ...props }: SubmitButtonProps){
  console.log('Form is submitting:', isSubmitting);
  return <Button type="submit" color={ color } disabled={ isSubmitting } { ...props }>{ children }</Button>;
}

export { Button, SubmitButton };