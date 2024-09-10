type ButtonProps = React.ComponentProps<'button'>

const Button = ({children, ...rest}: ButtonProps) => {

    return  (
        <button {...rest} 
        className="w-40 h-10 mb-4 rounded-full blackToWhiteBg whiteToBlackText">
          {children}
        </button>
    );
};
  
export default Button;