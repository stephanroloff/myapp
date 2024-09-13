const BlurryBackground = () => {
    return (
      <div className="absolute top-0 left-0 w-full h-full flex justify-center z-[-10]">
        <div className="relative top-[-300px] w-[40%] h-[200px] bg-themeColor rounded-full blur-[150px]"></div>
      </div>
    );
  };
  
  export default BlurryBackground;
  
