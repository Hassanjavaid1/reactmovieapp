import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function HomeCart_Skeleton() {
  return (
    <>
      <div className="Homecart">
        <div className="homecart_skeleton">
            <Skeleton circle className='homecart_img_skeleton'/>
                <Skeleton className='homecart_title_skeleton'/>
            <div className="homecart_desc">
                <Skeleton className='homecart_vote_average_skeleton'/>
                <Skeleton className='homecart_date_skeleton'/>

            </div>
        </div>
      </div>
    </>
  )
}

export default HomeCart_Skeleton
