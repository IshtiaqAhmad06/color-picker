import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div style={{backgroundColor:"blue"}}>
      <h1>Home Page</h1>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Home;