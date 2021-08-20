// Codevolution 

import React, { Fragment } from 'react';

const ArrayMap2 = () => {
  //  const names = ['Bruce', 'Clark', 'Diana', 'Bruce']

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
        <h1 key={person.id}>I am {person.name}. My age is {person.age}. My skill is '{person.skill}'. </h1>
      )     // key must be unique 
            // person is a parameter //persons is array object name */}   
      console.log(personList[0]); 
    return ( 
        <Fragment>  
 
            {personList} 

        </Fragment> 
    );
}

export default ArrayMap2; 
