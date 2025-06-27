interface ButtonProps {
  children: string;
  type?: "button" | "submit" | "reset";
  color?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({ children, type="button", color, onClick: handleClick }: ButtonProps){
  return (
    <button 
      type={ type } 
      onClick={ handleClick } 
      style={{ backgroundColor: color }} 
      className="bg-green-500 border-0 text-white py-1.5 px-4 text-center no-underline inline-block text-base my-1 mx-0.5 cursor-pointer rounded-md"
    >
      { children }
    </button>
  );
}

export default Button;