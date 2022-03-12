import React, { useState } from "react";
import Test from "./Components/Test";
import EventParctice from "./Components/EventParctice";
import EventParcticeForm from "./Components/EventParcticeform";
import IterationSample from "./Components/IterationSample";
import FilterTest from "./Components/FilterTest";
import Counter from "./Components/Counter";
import Info from "./Components/Info";

function App() {
  // const [visible, setVisible] = useState(false);

  return (
    <>
      {/* <Test /> */}
      {/* <EventParctice /> */}
      {/* <EventParcticeForm /> */}
      {/* <IterationSample /> */}
      {/* <FilterTest /> */}
      <Counter />
      {/* <button onClick={() => setVisible(!visible)}>
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <Info />} */}
    </>
  );
}

export default App;
