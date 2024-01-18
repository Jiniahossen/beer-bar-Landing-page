const Button = ({ text, bgColor, hoverColor,textColor }) => {

  return (
    <div>
      <button
        style={{
          backgroundColor: bgColor,
          ":hover": { backgroundColor: hoverColor },
          color: textColor
        }}
        className="font-Bungee w-56 font-semibold text-white uppercase px-4 py-2.5"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
