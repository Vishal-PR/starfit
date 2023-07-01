import React from "react";

function BackgroundCircle() {
  return (
    <>
      <div className="absolute flex w-full h-full  items-center justify-center -z-30 ">
        <div className="absolute w-[1200px] h-[1200px] flex items-center justify-center border-gray-500 border-t-[1px] border-r-[1px] rounded-full rotate-[20deg] bg-[#29292b]  ">
          
          <div className="absolute w-[800px] h-[800px] border-gray-500 border-t-[1px] border-b-[1px] border-r-[1px] rounded-full -rotate-[45deg] bg-gradient-radial from-[#E7E1B1]  to-[#272727] ">
                
          </div>

        </div>
      </div>
    </>
  );
}

export default BackgroundCircle;
