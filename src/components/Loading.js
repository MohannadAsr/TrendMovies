import React from 'react'
import BarLoader from 'react-spinners/BarLoader'

export default function Loading() {
  return (
    <div className='loading-page'>
       <BarLoader
  color="#5EFCEB"
  height={9}
  width={353}
              />
    <p className='my-4 fs-2'>Loading TrendMovies ...</p>
    <span className='owner'>Created By MohannadAsr Using ReactJS</span>
    </div>
  )
}
