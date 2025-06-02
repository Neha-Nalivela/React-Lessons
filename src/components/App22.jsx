import React, {useState,useEffect} from 'react'
import axios from 'axios';
export default function App22() {
    const [temp,setTemp] = useState();
  const fetchData = async () => {
    const url = "http://localhost:8080/weather";
    const res = await axios.get(url);
    setTemp(res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);  
  return (
    <div>
        {temp}
    </div>
  )
}
