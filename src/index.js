import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import Counter from "./components/Counter";
import counter from "./reducers";
import ListCounter from "./components/ListCounter";

const store = createStore(counter);
const rootEl = document.getElementById("root");
const render = () =>
  ReactDOM.render(
      <div>
         <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: "INCREMENT" })}
        onDecrement={() => store.dispatch({ type: "DECREMENT" })}
      />
      <ListCounter value={store.getState()} />
    </div>,
    rootEl
  );

render();
store.subscribe(render);
