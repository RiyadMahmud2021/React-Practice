import ArrayMap from './ArrayMapping/ArrayMap';
import ArrayMap1 from'./ArrayMapping/ArrayMap1';
import ArrayMap2 from'./ArrayMapping/ArrayMap2';
import StateSetState from './ClassComp/1.StateSetState/StateSetState';
import LifeCycle01 from './ClassComp/2.ComponentLifeCycle/LifeCycle01';
import LifeCycle02 from './ClassComp/2.ComponentLifeCycle/LifeCycle02'; 
import Riyad from './HOC/Riyad';
import Rokon from './HOC/Rokon';
import ConditionallyRunEfffect from './Hook/UseEffect/BConditionallyRunEfffect';
import RunEffectOnlyOnce from './Hook/UseEffect/CRunEffectOnlyOnce';
import UseEffectAfterRender from './Hook/UseEffect/AUseEffectAfterRender';
import ListKey from './ListKey/ListKey';
import ListKey1 from './ListKey/ListKey1'; 
import AppRender1 from './RenderPropsBasic/AAppRender'; 
import HookCounter from './Hook/UseEffect/DUseEffectWithCleanUp/HookCounter';
import UseEffectWithCleanUp from './Hook/UseEffect/DUseEffectWithCleanUp/ToggleCodeForUseEffectWithCleanUp';
import './App.css';
import EUseEffectWithIncorrectDependency from './Hook/UseEffect/EUseEffectWithIncorrectDependency';
import DataFectching from './Hook/UseEffect/FFetchingData/DataFectching';
import DataFectching1 from './Hook/UseEffect/FFetchingData/DataFetching1';
import DataFectching2 from './Hook/UseEffect/FFetchingData/DataFetching2';


function App() {  
  return (
    <div className="App">
        {/* ---------./ArrayMapping/------------ */}
                          {/* <ArrayMap/>
                          <ArrayMap1/> 
                          <ArrayMap2/>
                          <ListKey/> 
                          <ListKey1/>    */}
        {/* ---------./ArrayMapping/------------ */}


        {/* --------./StateSetState------------- */}

                          {/* <StateSetState/> */}

        {/* --------./StateSetState------------- */} 



        {/* --------./ClassComp/2.ComponentLifeCycle------------- */}
                          {/* <LifeCycle01/>  */}
        {/* --------./ClassComp/2.ComponentLifeCycle------------- */} 



        {/* --------./ClassComp/HOC------------- */}
                          {/* <Riyad Camp="999"/> 
                          <Rokon Camp="1000"/>   */}
        {/* --------./ClassComp/HOC------------- */}  

        {/* --------./ClassComp/RenderPropsBasic------------- */}
                          {/* <AppRender1/>      */}
        {/* --------./ClassComp/RenderPropsBasic------------- */}  


        {/* --------./Hook/UseEffect/UseEffectAfterRender------------- */}
                          {/* <UseEffectAfterRender/>    
                          <ConditionallyRunEfffect/> 
                          <RunEffectOnlyOnce/>
       <h1>----------HookCounter with toggle by clean up------------</h1>
                          <UseEffectWithCleanUp/>  */}
        {/* --------./Hook/UseEffect/UseEffectAfterRender------------- */}   




        {/* --------./Hook/UseEffect/EUseEffectWithIncorrectDependency------------- */}
                          {/* <EUseEffectWithIncorrectDependency/>  */}
        {/* --------./Hook/UseEffect/EUseEffectWithIncorrectDependency------------- */}      
 
        {/* --------./Hook/UseEffect/FFetchingData/DataFectching------------- */}
                           <DataFectching/> 
                           <br/>   <br/>   <br/>
                           <DataFectching1/>
                           <br/>   <br/>   <br/>
                           <DataFectching2/>  
        {/* ----------./Hook/UseEffect/FFetchingData/DataFectching----------- */}     
 
  
        
 
    </div>
  ); 
}   

export default App; 
