import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../redux/features/searchSlice';

const Tabs = () => {
  const tabs = ['photos', 'videos', 'gif'];
const activeTab = useSelector((store)=> store.search.activeTab)
const dispatch = useDispatch()
  return (
    <div className='flex gap-7 mt-5'>
      {
        tabs.map((elem, idx) => (
          <button key={idx} className={`${elem === activeTab ? "bg-gray-700" : "bg-blue-800"} bg-blue-800 px-6 py-2 uppercase font-semibold cursor-pointer rounded-md hover:scale-95 transition-all duration-300`}
          onClick={()=> dispatch(setActiveTab(elem))}
          >{elem}</button>
        ))
      }
    </div>
  )
}

export default Tabs