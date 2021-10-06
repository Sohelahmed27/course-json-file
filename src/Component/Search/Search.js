import React from 'react';
import './Search.css'
import  { useEffect, useState } from 'react';


const Search = () => {
  const [data, setData]=useState([])
  const[seachText, setSearchText]=useState('')
  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/Sohelahmed27/toolsjson/main/tool.json')
    .then(res=>res.json()
    .then(data=>setData(data)))
},[seachText])

  const handleOnChange =(e) =>{
    setSearchText(e.target.value);
  }

  return (
    <div 
    style={{backgroundImage:"url(/images/wooden-board-looking-out-library.jpg)"}}
    className='search-container'>
      <h1 className='text'>New Hopes Learning Center</h1>

      <div className='search-box'>
        <input 
        onChange={handleOnChange}
        type='text' className='p-2' placeholder='Enter your course name'></input>
        <button className='btn btn-danger p-2'>Search</button>
      </div>
      <div className='courses'></div>
      <div className='row'>
        {
          data?.map((data)=>(
            <div className='col-md-4'>
              <div className='cart'>
                <div className='logo-image'>
                  <img className="w-50 text-center" 
                  src={data.img} alt=''/>
                  <h3>{data.name}</h3>
                  <h4>Fee: {data.Price}</h4>
                  <p>{data.Description}</p>
                  <button className='btn btn-danger'>Enroll Now</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Search;