import react from 'react'
import axiosInastance from './../axioseConfig/instance'
// import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
const useFetch = (endpoint) =>{

   

     const [data,setData]  = useState({})
     const [isLoading, setIsLoading] = useState(true)
     const [ isError, setIsError] = useState(false)
     const getMovie = () => {
      setIsLoading(true); 
        
      axiosInastance.get(endpoint)
          .then((res) => {
              setData(res.data);
              setIsLoading(false); 
          })
          .catch((err) => {
              console.log(err.message);
              setIsError(true); 
              setIsLoading(false); 
          });
  };

  useEffect(() => {
      getMovie();
  }, []); 



  return {data,isLoading,isError}
}

export default useFetch;