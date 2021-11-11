// Data Fetching
// useState,useEffect, axois, promise, jsonplaceholder, ButtonClick to see result 
// Codevolution  
import axios from 'axios';
import React, { Fragment, useState, useEffect  } from 'react';
 
const DataFetching2 = () => {
    const [posts, setPosts] = useState([])
    const [id, setId] = useState("Enter 1~100") 
    const [idFromButtonClick,setIdFromButtonClick] = useState("Enter 1~100"); 
 
    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`) // getting data from this link
        .then(res => {         // axios returning a promise // res for response
            console.log(res);
            setPosts(res.data); 
        }) 
        .catch(err => {      
            console.log(err);   
        }) 
    },[idFromButtonClick]) // Remember: If we pass dependencies to useEffect hook,  
            // then useEffect will executed every time passed variable data is updated. 
            // Here, after every time of "idFromButtonClick" state related button clicking, 
            // useEffect will be run. Because we are giving priority to the 
            // dependency of "idFromButtonClick" state.         

    const handleInput = (e) => {
        setId(e.target.value); 
    }

    const handleButtonClick =(e) => { 
        setIdFromButtonClick(id); 
    }
    return (     
        <Fragment>
            <input type="text" name="" value={id} onChange={handleInput}/> 
            <button type= "button" onClick={handleButtonClick}> Click to See Result </button>
             <div>
                     {posts.title}   
             </div>    
        </Fragment> 
    ); 
}

export default DataFetching2;
