import React from 'react'
import VideoCard from "./VideoCard.jsx"
import "../styles/Videos.css"
const Videos = ({videos}) => {
  return (
    <div className='Videos'>
      {
        videos.map((item,index)=>(
            <VideoCard index={index} key={item.image} image={item.image} />
        ))
      }
    </div>
  )
}

export default Videos
