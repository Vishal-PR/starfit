import React from 'react'
import Watch from "../assets/watch.png"
// import './mainimage.css'

function MainImage() {
  return (
    <div className='flex w-full h-full items-center justify-center z-10'>
        <img src={Watch} alt="watch" className='w-[50%] h-[50%] object-contain animate-slide-in-bottom'/>
    </div>
  )
}

export default MainImage