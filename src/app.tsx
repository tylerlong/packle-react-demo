import React from "react";
import { auto } from "manate/react";
import { Button } from "antd";

import store from "./store";

const App: React.FC = auto(() => {
  console.log("Hello, React with Bun and TypeScript!");
  return (
    <div>
      <h1>{store.counter}</h1>
      <Button onClick={() => (store.counter += 1)} type="primary">
        Increment
      </Button>
    </div>
  );
});

export default App;
