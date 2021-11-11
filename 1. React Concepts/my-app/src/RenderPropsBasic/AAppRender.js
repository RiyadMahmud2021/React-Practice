import React from 'react';
import ClickCounter from './CClickCounter';
import Counter from './BCounter';
import HoverCounter from './CHoverCounter';
import WhatIsRenderProps from './WhatIsRenderProps';

const AppRender = () => {
    return (
        <div > 
           
          <Counter
           render ={(count,incrementCount) =>(
            <ClickCounter count={count} incrementCount={incrementCount}/>
          )       
          }/>   
          <Counter 
           render ={(count,incrementCount) =>( 
            <HoverCounter count={count} incrementCount={incrementCount}/> 
          )

          }/>  

          <WhatIsRenderProps render={(isUser) => isUser ? "Welcome User" : "Welcome Guest"}/>  
                                            {/* First portion true and second portion false */}

         </div>   
    );
} 
 
export default AppRender;
