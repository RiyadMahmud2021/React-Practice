# Why we use useEffect?
# -------------------------------------------------------------
Ans: 
We use useEffect when we need to handle "side works/side effects" of related state. It happens after component rendering. Good Example, 
See the axios api here, we use this external api axios and its code in useEffect hook function. 

Don't forget these,
- side works = side-effects.
- "axios" is an external api.
- "useEffect" related to passing response for side-effects after rendering component. 
- "dependency" of useEffect make sure that application side-effect need to act for given depency. 
 
# useEffect Hook more general knowledge
# --------------------------------------------------------         
- Perform side effects in function components.
      - Using Effect  
      - Data Fetching
      - Manually changing the DOM
      - API Calling 
      - Managing the outside world data
      - Timer setting
      - Replacement of  
            - componentDidMount(), 
            - componentDidUpdate(),
            - componentDidUnmount()          

- useEffect(callback, [dependencies array]) is the hook that manages the side-effects in functional components. 
   - Callback argument is a function to put the side-effect logic.
   - Dependencies is a list of dependencies of your side-effect:
         - If we don’t pass dependency variable then useEffect hook will only called 
            when our component is rendered.  
         - If we pass an empty array to useEffect then our component will be rendered for first time 
            when a component is rendered. To re-call useEffect hook we have to refresh our page. 
         - If we pass dependencies to useEffect hook,  
            then useEffect will executed every time passed variable data is updated.  
            
- useEffect will run after every render.
- Need to Use multiple useEffect for explaining multiple effects. 
 