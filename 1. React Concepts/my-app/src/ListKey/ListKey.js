import React, { Fragment } from 'react';

const ListKey = () => {
    const persons = [ 
        {
          id: 1,
          name: 'Riyad',
          age: 24,           // 1st person's index,every index catches as parameter person not persons 
          skill: 'React'
        }, 
        {
          id: 2,
          name: 'Clark',    // 2st person's index
          age: 25,
          skill: 'Angular'
        },
        {   
          id: 3,
          name: 'Diana',
          age: 28,
          skill: 'Vue'        // 3st person's index
        }
      ]
    var personList = persons.map(person => 
        <ul key={person.id}>
           <li>
            I am {person.name}. My age is {person.age}. My skill is '{person.skill}'. 
           </li>
        </ul>
      )     //  Person is a parameter //persons is array object name 
            // "Key" must be unique, it gives the emements a stable identity
                   
      console.log(personList[0]);  
    return (
        <Fragment>  
            {personList}  
        </Fragment>  
    );
}

export default ListKey;


                        // Notes: List and Key
// "Key" must be unique, it gives the emements a stable identity
//  A "key" is special string attribute, you need to include when creating lists of elements
//  Keys help React identity which items have changed, are added, or are removed.