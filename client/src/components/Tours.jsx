import React from 'react'
import Tour from './Tour'

const Tours = ({tours,handleNotInterested}) => {
  // const handle
  return (
    <div >
      {
        tours.map((tour)=>{
            return(
                <Tour key={tour.id} tour={tour} handleNotInterested={handleNotInterested}/>
            )
        })
      }
    </div>
  )
}

export default Tours
