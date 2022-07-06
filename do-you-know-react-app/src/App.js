import ButtonExample from "./components/ButtonExample";
import InputExample from "./components/InputExample";
import Routes from "./Routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes />
      <ButtonExample />
    </div>
  );
}

export default App;
