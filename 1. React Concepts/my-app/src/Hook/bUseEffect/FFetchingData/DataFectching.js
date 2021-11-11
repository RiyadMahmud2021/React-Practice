// Data Fetching
// useState,useEffect, axois, promise, jsonplaceholder, map function 
// Codevolution and Md. Bulbul Ahmad  
import axios from 'axios';
import React, { Fragment, useState, useEffect  } from 'react';


const DataFectching = () => { 

    const [posts, setPosts] = useState([])
 
    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/posts") // getting data from this link
        .then(res => {         // axios returning a promise // res for response
            console.log(res);
            setPosts(res.data);
        })
        .catch(err => {      
            console.log(err);  
        }) 
    },[])  // Remember: If we pass an empty array to useEffect then our component will be rendered for 
                // first time when a component is rendered. 
                // To re-call useEffect hook we have to refresh our page.    
 
    return (     
        <Fragment>
             {
                posts.map( ( post )=>
                 <h1 key={post.id}>
                     {post.id}. <br/>
                     {post.title}
                 </h1> 
                 )   
             }      
        </Fragment>
    );
}

export default DataFectching;
