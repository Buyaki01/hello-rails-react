import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../../redux/greetings/greetings.js';

const Greeting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);
  
  const greetingsFromTheApi = useSelector((state) => state);
  console.log(greetingsFromTheApi)
  return (
    <div>
      <p> {greetingsFromTheApi} </p>
      <button> Get another greeting </button>
    </div>
  )
}
export default Greeting
