import React, { useContext } from "react";
import Button from "../Button/Button";
import { CounterContext } from "../../App";
import { COUNTER_ACTION_TYPES } from "./CounterHook.reducer";

function CounterHook() {
  const [state, dispatch] = useContext(CounterContext);

  return (
    <div>
      <p>Count: {state.count}</p>

      <Button
        handleClick={() =>
          dispatch({
            type: COUNTER_ACTION_TYPES.INCREMENT,
          })
        }
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
