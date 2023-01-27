import "./App.css";
import { Inputs } from "./components/ComponentIndex";
import expenses from "./data";

// const p = expenses.price;
const total = expenses.reduce((total, value) => {
  return total + value.price;
}, 0);

function App() {
  return (
    <>
      {expenses.map((e) => (
        <Inputs id={e.id} name={e.name} price={e.price} />
      ))}
      <h3>Total: {total} </h3>
    </>
  );
}

export default App;
