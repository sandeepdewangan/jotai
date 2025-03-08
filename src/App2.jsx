import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const username = "sandeep";
const currentUser = atomWithStorage("username", username);

function App2() {
  const [user, setUser] = useAtom(currentUser);

  return (
    <>
      <label> User is: {user}</label>
      <input type="text" onChange={(e) => setUser(e.target.value)} />
    </>
  );
}

export default App2;
