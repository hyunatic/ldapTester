import Public from "./components/Public"
import Protected from "./components/Protected"
import useAuth from "./hooks/useAuth";

function App() {
  const auth = useAuth()
  return (
    <div className="App">
      {auth ? <Protected /> : <Public />}
    </div>
  );
}

export default App;
