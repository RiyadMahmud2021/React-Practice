import React, { Fragment, useState } from 'react';

const NumAddingInArray = () => {

    
    const[addNum ,setAddNum] = useState([])
    const [add,setAdd] = useState("")


    // const handleAddChange = (e) =>{
    //     setAdd(e.target.value); // ... spread operator. 
    //                      // Here, its needed for add or merge object properties
    //                     // We can also merge this property by typing 
    //                      // useState can't "add or merge" object properties but "setState" can do it
    // }  



    // const handleAdd = (e) => {
    //     setAddNum([...addNum, {
    //         id: addNum.length,
    //         value:  setAdd(e.target.value)   // setAdd({...add, add:e.target.value}
        
    // }])
    // }

    
    const handleAdd = (e) => {
        setAddNum([...addNum, {
            id: addNum.length,
            value:  setAdd(e.target.value)   // setAdd({...add, add:e.target.value}
        
    }])
    }
    

    return (
        <Fragment>
            <label>Add Num in Array</label>
            <input type="text"
                id="add"
                name="add"
                value={add}
                onChange={handleAdd}/>
            <ul>
                {
                addNum.map(function(value){
                    <li key={addNum.id} >{addNum.value}</li>
                })
                } 
            </ul>
        </Fragment>
    ); 
}

export default NumAddingInArray;
