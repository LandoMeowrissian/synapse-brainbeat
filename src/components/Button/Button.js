import "./Button.scss"; 

const Button = ({ onClick, className, padKey, children }) => {
  return (
    <button className={className} onClick={onClick} data-pad-key={padKey}>
      {children}
    </button>
  );
};

export default Button;
