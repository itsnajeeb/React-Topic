import React from 'react'

const ResultCard = ({item}) => {
  return (
    <div className=' w-2/12 h-72 rounded-lg mx-auto relative'>
        <div className='h-full overflow-hidden rounded-md'>
        {item.type === 'photos' ? <img src={item.src} alt="PHOTO" className='h-full w-full object-cover object-center ' /> : ""}
        {item.type === 'videos' ? <video src={item.src} controls muted autoPlay className='h-full w-full object-cover object-center'></video> : ""}
        {item.type === 'gif' ? <img src={item.src} alt="GIF" className='h-full object-cover object-center w-full' /> : ""}
        </div>
        <div className='absolute bottom-0 text-white'>
          <h2 className='text-white px-5 font-semibold  ' id='title'>{item.title}</h2>
        </div>
    </div>
  )
}

export default ResultCard