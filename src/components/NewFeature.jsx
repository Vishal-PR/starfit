import React from 'react';
import {BiChevronRight} from 'react-icons/bi';

function NewFeature() {
  return (
    <div className='absolute flex flex-col items-start  w-[30%] h-[50%] ml-[15%] mt-[12%] animate-slide-in-left'>
        <h4 className='text-yellow-600 uppercase tracking-[.25em] hover:tracking-[.5em] duration-200  '>
            New Feature 
        </h4>

        <div className='text-6xl mt-10 text-white'>
            <p>Think</p>
            <p>Forward</p>
        </div>
        <div className='mt-10 text-gray-400 '>
            <p>Application for all your daily</p>
            <p>actvities.</p>
        </div>

        <div class="mt-14  text-gray-300 h-[40px] w-[150px] rounded-lg bg-gradient-to-b from-gray-100 to-orange-500 p-[1px]">  
        <button className='h-full w-full bg-gray-800/95 rounded-lg'>
            <span className='flex flex-row items-center justify-center text-base px-2'>
                More Info <BiChevronRight className='ml-4'/>
            </span>
                
        </button>
  </div>
    </div>
  )
}

export default NewFeature