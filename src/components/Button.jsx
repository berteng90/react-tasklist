const Button = ({ type, text, handleClick }) => {
  return (
    <button type={type} onClick={handleClick} className="bg-slate-400 w-20 ">
      {text}
    </button>
  );
};

export default Button;
