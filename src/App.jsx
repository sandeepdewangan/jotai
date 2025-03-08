import { atom, useAtom } from "jotai";

const counter = atom(0);

function App() {
  const [count, setCount] = useAtom(counter);

  function onBtnClick() {
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={onBtnClick}>Increment</button>
    </>
  );
}

export default App;
