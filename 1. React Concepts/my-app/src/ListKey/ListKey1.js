import React from 'react';

const ListKey1 = () => {
    const names = ['Rmr', 'RPM', 'RJS','Rmr']
    const nameList = names.map((name,index) => 
       // <h1 key={name}> {name} </h1> //See console: Each chld shud have a  unique 
       <h1 key={index}> {index} {name} </h1> //  index is attribute and we are passing it as parameter
                                        // Index using Notes are below 
        )
    return (
        <div>
            {nameList}  
        </div> 
    ); 
}

export default ListKey1; 



    // Notes: Index aas key
    // When we will use index as as key

// 1. The items in your list do not have a unique id. 
// 2. The list is a static list and will not change. 
// 3. The list never be reordered or filtered.