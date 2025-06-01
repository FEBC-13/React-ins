import './Button.css';

function Button({ children, type="button", color, onClick: handleClick }){
  return (
    <button type={ type } onClick={ handleClick } style={{ backgroundColor: color }} className="rounded-button">{ children }</button>
  );
}

export default Button;