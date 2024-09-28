type CardProps = {
    children: React.ReactNode;
}

const Card = ({children}:CardProps) => {

    return  (
        <div  
        className="w-[600px] h-auto p-8 my-4 border shadow-lg mr-4 border-customGraySoft dark:border-customGray rounded-md blackToWhiteText bg-white dark:bg-cardGray"
        >            
        {children}
        </div>
    );
};
  
export default Card;