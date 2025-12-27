import React from 'react'
import { useState } from 'react';

const SearchBar = () => {
  const [text, setText] = useState('');

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(text);
    
  }
  return (
    <div className='bg-gray-900 w-full py-14 px-32'>
      <form action="" className='max-w-4xl  mx-auto flex w-full relative  ' onSubmit={(e) => submitHandler(e)}>
        <div className='flex-1'>
          <input type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className='border flex-1 w-full py-3 px-5 outline-none focus:border-blue-700 rounded-md border-blue-500'
            placeholder='Search Anything '
          />
        </div>
        <button
          className=' absolute right-0 px-10 h-full cursor-pointer bg-gray-500 rounded-md'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar