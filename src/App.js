import './App.css';
import { Counter } from './components/Counter';
import MyComponents from './components/MyComponents';
import { Students } from './components/props';

function App() {
  return (
    <div className='students'>
  
  <Students name= "Alagba" sex="Male" age={30} isStudent={true} income={200000} location="Newcastle"/>
  
  <MyComponents />
  <Counter />
  </div>
)

}

export default App;
