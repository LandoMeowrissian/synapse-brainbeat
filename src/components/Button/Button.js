import "./Button.scss"; // Assuming you have a separate SCSS file for the Button component

const Button = ({ onClick, className, padKey, children }) => {
  return (
    <button className={className} onClick={onClick} data-pad-key={padKey}>
      {children}
    </button>
  );
};

export default Button;
