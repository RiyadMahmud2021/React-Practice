import React, { Fragment } from 'react';
import Counter from './Counter/Counter';
import Counter1 from './Counter/Counter1';
import Form from './Form/Form';
import Form1 from './Form/Form1';
import './App.css';

function App() { 
  return ( 
    <div className="App">
          
        {/*
        //Counter.js APP
        //-----------------------------------------*/}
         <Counter/> 
        {/*//Counter.js APP
        //-----------------------------------------*/}

        {/* 
        //Counter1.js APP
        //------------------------------------------*/}
        <Counter1/>   
        {/*
        //Counter.js APP
        //----------------------------------------- */}

        {/* // Form.js APP
        //----------------------------------------- */}
        <Form/>  
        {/* //From.js APP
        //----------------------------------------- */} 

        {/* // Form1.js APP
        //----------------------------------------- */}
        <Form1/>  
        {/* //From1.js APP
        //----------------------------------------- */}



    </div>
  );
}

export default App;


 