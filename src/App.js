import logo from './logo.svg';
import './App.css';
import { Inputs } from "./components/ComponentIndex";

const expenses = [
  {id:1,name: "phone" ,price:1000},
  {id:2,name: "phweafsone" ,price:1000},
  {id:3,name: "das" ,price:1000},
  {id:4,name: "das" ,price:1000},
  {id:5,name: "csed" ,price:1000},
];


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
