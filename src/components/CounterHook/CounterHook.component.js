import React, { useReducer } from "react";
import Button from "../Button/Button";
import {
  COUNTER_INITIAL_STATE,
  COUNTER_ACTION_TYPES,
  counterReducer,
} from "./CounterHook.reducer";

function CounterHook() {
  const [state, dispatch] = useReducer(counterReducer, COUNTER_INITIAL_STATE);

  return (
    <div>
      <div>Count: {state.count}</div>

      <Button
        handleClick={() => dispatch({ type: COUNTER_ACTION_TYPES.INCREMENT })}
        text="+"
      />
      <Button
        handleClick={() => dispatch({ type: COUNTER_ACTION_TYPES.DISREMENT })}
        text="-"
      />
      <Button
        handleClick={() => dispatch({ type: COUNTER_ACTION_TYPES.RESET })}
        text="RESET"
      />
    </div>
  );
}

export default CounterHook;
