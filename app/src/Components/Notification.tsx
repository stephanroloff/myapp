const Notification = () => {

    return  (
        <span className="relative top-0 right-0 flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
    );
};
  
export default Notification;