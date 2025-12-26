import './App.css';
import { ComponentA } from './components/ComponentA';
import { Counter } from './components/Counter';
import MyComponents from './components/MyComponents';
import { Students } from './components/props';
import Components from './components/UseEffect.Counter';
import { Window } from './components/WindowResize';

function App() {
  return (
    <div className='students'>
  
  <Students name= "Alagba" sex="Male" age={30} isStudent={true} income={200000} location="Newcastle"/>
  
  <MyComponents />
  <Counter />
  <Components />
  <Window />
  <ComponentA />
  </div>
)

}

export default App;
