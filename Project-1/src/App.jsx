import React from 'react'
import SearchBar from './components/SearchBar'
import './index.css'
import Tabs from './components/Tabs'
import ResultGrid from './components/ResultGrid'
function App() {
  return (
    <div className='text-white flex justify-center flex-col mx-auto items-center '>
      <SearchBar/>
      <Tabs/>
      <ResultGrid/>
    </div>
  )
}

export default App