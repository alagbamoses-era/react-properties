import './App.css';
import { Students } from './components/props';

function App() {
  return (
    <div className='students'>
  
  <Students name= "Alagba" sex="Male" age={30} isStudent={true} income={200000} location="Newcastle"/>
  <Students name= "Glory" sex="Female" age={8} isStudent={true} income={2000} location="Newcastle"/>
  <Students name= "Victor" sex="Male" age={4} isStudent={true} income={2000} location="Newcastle"/>
  <Students name= "Alagba" sex="Male" age={30} isStudent={true} income={200000} location="Newcastle"/>
  <Students name= "Glory" sex="Female" age={8} isStudent={true} income={2000} location="Newcastle"/>
  <Students name= "Victor" sex="Male" age={4} isStudent={true} income={2000} location="Newcastle"/>
  <Students name= "Bukola" />
  </div>
)

}

export default App;
