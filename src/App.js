import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { asyncIncrement, increment } from "./actions";
export default function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  // This is synchrounous dispatch
  const incrementAction = () => {
    const startTime = Date.now();
    dispatch(increment());
    const endTime = Date.now();
    console.log("Delay in sync dispatch: ", (endTime - startTime) / 1000);
  };

  // This is asynchrounous dispatch

  const asyncIncrementAction = () => {
    const startTime = Date.now();
    dispatch(asyncIncrement());
    const endTime = Date.now();
    console.log("Delay in async dispatch: ", (endTime - startTime) / 1000);
  };

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={incrementAction}>Increase count</button>
      <button onClick={asyncIncrementAction}>Aysnc Increase count</button>
    </div>
  );
}
