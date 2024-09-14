// import React from 'react';

function Read() {
  return <>
          <h2 className="blackToWhiteText">Read Page</h2>
          <div className="grid grid-cols-autofit-300 gap-3 mt-4 w-full">
            <div className="w-full h-[50px] bg-green-600">1</div>
            <div className="w-full h-[50px] bg-red-600">2</div>
            <div className="w-full h-[50px] bg-yellow-600">3</div>
          </div>
          <div className="h-2 w-full bg-green-400 max-[800px]:bg-red-400 max-[500px]:bg-blue-400"></div>
          <div className="h-2 w-[200px] bg-green-500 max-iphone:bg-yellow-400"></div>
          <div className="h-2 w-[300px] bg-green-600"></div>
        </>
}

export default Read;
