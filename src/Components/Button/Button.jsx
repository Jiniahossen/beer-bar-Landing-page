const Button = ({text,color,hoverColor}) => {
    console.log(color);
    return (
        <div>
             <button className={`font-Bungee font-semibold text-white uppercase px-4 py-2.5 bg-[${color}] hover:bg-[${hoverColor}]`}>
                   {text}
             </button>
        </div>
    );
};

export default Button;