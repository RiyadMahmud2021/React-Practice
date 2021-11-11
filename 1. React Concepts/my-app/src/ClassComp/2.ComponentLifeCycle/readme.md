// Codevolution
// Geeky Shows 

LifeCycle Methods: Can use only on  
1. Mounting: 
        When a component is being created and inserted into the DOM.
        
        There are 4 methods such as:(Order Sequenced) 
            - constructor
                 - A special function that will get called whenever a new component is created, use     super  (props) method.     
                 - Initializing state and Buinding event handlers. 
                 - Donot cause side effects Ex: HTTP request.  

            - static getDerivedStateFromProps( props, state ) 
                -  When the state of component depends on changes in "props" over time.
                -  Set the state. 
                -  Donot cause sideffects. Ex: HTTP requests.  
     
            - render 
                -  Only required method.
                -  Read props and state and return JSX.
                -  Don't change state or interact with DOM or make ajax calls.
                -  Children components lifecycle methods are also executed. 

            - componentDidMount 
                -  Invoked immediately after a component and all its children components have been    rendered in the DOM.  
                -  Works after render method has taken place. 
                -  API Calling, Ajax request 
                -  This method is also used fro integration with other javascript frameworks 
                -  Any functions with delayed execution such as "setTimeout" and "setInterval". 
                -  Cause side effects. Ex: Interact with the DOM or perform any ajax calss to load data.  

2. Updating:  
        When a component is being re-rendered as a result of changes to either its props and states.
        Updating is the "process of changing state or props of component and update changes to nodes already in the DOM".
        Updating can be caused by changes to props or state. 

        
        There are 5 methods such as:(Order Sequenced) 
            - static getDerivedStateFromProps( props, state ) 
                -  When the state of component depends on changes in props over time.
                -  Method is called every time a component is re rendered. 
                -  Set the state. 
                -  Donot cause side ffects. Ex: HTTP requests.   
                
            - shouldComponentUpdate(nextProps,nextState) 
                -  Dictates if the component should re-render or not.
                -  Performance Optimization
                -  Donot cause side ffects. Ex: HTTP requests. 
                -  Donot call the setState method
                                                             
            - render                                                        (Important)
                -  Only required method. 
                -  Read props and state and return JSX.
                -  Don't change state or interact with DOM or make ajax calls.
                -  Children components lifecycle methods are also executed. 

            - getSnapshotBeforeUpdate(prevProps,prevState)
                -  Called right before the changes from the virtual DOM are to be reflected in the DOM. 
                -  Captured some information from the DOM.
                -  Method will either return null or return a value.
                -  Returned value will be passed as the third parameter to the next method. 

            - componentDidUpdate(prevProps,prevState,snapshot)              (Important) 
                -  Called after the render is finised in the re-render cycles.  
                -  Cause side effect. 
                (Need see the prac from codevolution channel)       
             
3. Unmounting: (Order Sequenced) 
        When a component is being removed from the DOM. 
        Only one method:
        - componentDidUnmount  

4. Error Handling: (Order Sequenced)   
        When there is an error during rendering, in a lifecycle method, or in the constructor of any 
        child component. 
          
        There are 2 methods such as: 
            - static getDerivedStateFromError 
            - componentDidCatch    