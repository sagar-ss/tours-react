const url = 'https://course-api.com/react-tours-project';

import { useState,useEffect } from "react";
import Tours from './components/Tours'
const App = () => {
  const [tours,setTours] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const handleNotInterested = (id)=>{
    const newArr = tours.filter((tour)=>tour.id!==id)
    setTours(newArr)
  }

  const fetchData = async ()=>{
    setIsLoading(true)
    try {
        const response = await fetch(url)
        if(response.ok===true){
          const data = await response.json()
          console.log({data})
          setTours(data)
        }else{
          setIsError(true)
        }
      
    } catch (error) {
      setIsLoading(false)
      setIsError(true)
    }

    setIsLoading(false)

  }
  useEffect(()=>{

    fetchData()

  },[])
  if(isLoading){
    return(
      <h1>Loading...</h1>
    )

  }
  if(isError){
    return(
      <h1>Something went Wrong</h1>
    )
  }
  else{
    if(tours.length===0){
      return(
        <div>
          <h2>No tours left</h2>
          <button type='button' className="btn" onClick={()=>fetchData()}>Refresh</button>
        </div>
      )
    }
    else{
      return (
        <div>
          <h1>Our Tours</h1>
          <Tours tours = {tours} handleNotInterested={handleNotInterested} />
        </div>
      )
    }
  }

};
export default App;
