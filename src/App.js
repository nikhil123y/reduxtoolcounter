import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./store/index";

export default function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };
  const addBy = () => {
    dispatch(actions.addby(10));
  };
  return (
    <div className="App">
      <h1>hello</h1>
      <h1>conunter app</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={addBy}>Add By 10</button>
    </div>
  );
}
