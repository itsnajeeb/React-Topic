import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGIF, fetchPhoto, fetchVideos } from '../api/mediaApi';
import { setError, setLoading, setResults } from '../redux/features/searchSlice';
import ResultCard from './ResultCard';

const ResultGrid = () => {
  const dispatch = useDispatch()
  const { query, activeTab, results, loading, error } = useSelector(store => store.search)

  const getData = async () => {
    dispatch(setLoading())
    if (activeTab === 'photos') {
      return await fetchPhoto(query)
    }
    if (activeTab === 'videos') {
      return await fetchVideos(query)
    }
    if (activeTab === 'gif') {
      return await fetchGIF(query)
    }
  }

  useEffect(() => {
    if (!query) return

    const fetData = async () => {
      try {
        let data = await getData()
        dispatch(setResults(data))
      } catch (error) {
        console.log(error);
        // dispatch(setError(error.message))
      }
    }
    fetData();

  }, [query, activeTab])

  if (error) return <h1>ERROR</h1>
  if (loading) return <h1>Loading...</h1>
  console.log("DATA ",results);

  return (
    <div className='mt-10 w-full  flex gap-8 py-10 overflow-auto flex-wrap mx-auto  px-20'>
      {
        results.map((item,idx)=> (
          <ResultCard  key={idx} item={item}/>
        ))
      }
    </div>
  )
}

export default ResultGrid