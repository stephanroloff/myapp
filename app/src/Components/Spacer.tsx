type SpacerProps = {
    height: number;
  };
  
  const Spacer = ({ height }: SpacerProps) => {
    return (
      <div style={{ height: `${height}px` }}></div>
    );
  };
  
  export default Spacer;
  