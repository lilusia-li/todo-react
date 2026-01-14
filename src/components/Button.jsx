const Button = (props) => {
  const { className = "", type = "button", disabled = false, children } = props;
  return (
    <button className={`button ${className}`} type={type} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
