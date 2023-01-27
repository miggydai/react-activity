import logo from './logo.svg';
import './App.css';
import { Inputs } from "./components/ComponentIndex";
import expenses from './data';


function App() {
  return (
    <>
     {expenses.map((e) => (
        <Inputs id={e.id} name={e.name} price= {e.price}/>
      ))}
    
    </>
  );
}

export default App;
