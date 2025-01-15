type CardProps = {
    children: React.ReactNode;
    width?: string;
}

const Card = ({children, width}:CardProps) => {

    return  (
        <div  
        className={`h-auto p-8 my-4 border shadow-lg mr-4 border-customGraySoft dark:border-customGray rounded-md blackToWhiteText bg-white dark:bg-cardGray ${width?width:'w-[600px]'}`}
        >            
        {children}
        </div>
    );
};
  
export default Card;