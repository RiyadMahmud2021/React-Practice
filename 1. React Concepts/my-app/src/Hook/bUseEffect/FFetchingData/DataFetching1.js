// Data Fetching
// useState,useEffect, axois, promise, jsonplaceholder, using input field to see result
// Codevolution  
import axios from 'axios';
import React, { Fragment, useState, useEffect  } from 'react';


const DataFectching1 = () => { 

    const [posts, setPosts] = useState([])
    const [id, setId] = useState("           Enter 1~100           ") 
 
    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`) // getting data from this link
        .then(res => {         // axios returning a promise // res for response
            console.log(res);
            setPosts(res.data);
        }) 
        .catch(err => {      
            console.log(err);   
        }) 
    },[id]) // Remember: If we pass dependencies to useEffect hook,  
            // then useEffect will executed every time passed variable data is updated. 
            // Here, after every time of id changing, useEffect will be run. Because we are giving priority 
            // of dependency to "id".      

    const handleInput = (e) => {
        setId(e.target.value); 
    }
    return (     
        <Fragment>
            <input type="text" value={id} onChange={handleInput}/> 
             <div>
                     {posts.title}   
             </div>    
        </Fragment> 
    ); 
}

export default DataFectching1;
