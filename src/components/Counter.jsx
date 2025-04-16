import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  setStep,
} from "../store/counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const step = useSelector((state) => state.counter.step);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <h2>Counter: {count}</h2>
      <div className="controls">
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
      <div className="step-control">
        <input
          type="number"
          value={step}
          onChange={(e) => dispatch(setStep(Number(e.target.value)))}
        />
        <button onClick={() => dispatch(incrementByAmount(step))}>
          Increment by {step}
        </button>
      </div>
    </div>
  );
}

export default Counter;
