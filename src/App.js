import React from 'react'
import logo from './logo.svg';
import './App.css';
import ClassCounter from './Components/ClassCounter';
import HookCount from './Components/HookCount';
import HookCounter2 from './Components/HookCounter2';
import HookCounter3 from './Components/HookCounter3';
import HookCounter4 from './Components/HookCounter4';
import ClassCounterOne from './Components/ClassCounterOne';
import HookCounterOne from './Components/HookCounterOne';
import ClassMouse from './Components/ClassMouse';
import HookMouse from './Components/HookMouse';
import MouseContainer from './Components/MouseContainer';
import IntervalClassCounter from './Components/IntervalClassCounter';
import IntervalHookCounter from './Components/IntervalHookCounter';
import DataFetching from './Components/DataFetching';
import ComponentC from './Components/ComponentC';


export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
function App() {
  return (
    <div className="App">
      <br/>
      {/* <ClassCounter/> */}
      {/* <HookCount/> */}
      {/* <HookCounter2/> */}
      {/* <HookCounter3/> */}
      {/* <HookCounter4/> */}
      {/* <ClassCounterOne/> */}
      {/* <HookCounterOne/> */}
      {/* <ClassMouse/> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      {/* <IntervalClassCounter/> */}
      {/* <IntervalHookCounter/> */}
      {/* <DataFetching/>? */}
      <UserContext.Provider value={'Viral'}>
        <ChannelContext.Provider value={'codeEvolution'}>
        <ComponentC/>

        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
