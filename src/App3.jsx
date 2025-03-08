import { atom, useAtom } from "jotai";

const username = atom("read only");
const uppercaseUsername = atom((get) => get(username).toUpperCase());

const App3 = () => {
  const [text, setText] = useAtom(username);
  const [uppercase] = useAtom(uppercaseUsername); // read only
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <label>{uppercase}</label>
    </div>
  );
};

export default App3;
