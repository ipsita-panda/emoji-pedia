import logo from "./logo.svg";
import "./App.css";
import { Card1 } from "./Components/Card1";
import Card2 from "./Components/Card2";
import { emojiPedia } from "./emojiPedia";
function App() {
  return (
    <div>
      <Card1 />
      <Card2 emojiPedia={emojiPedia} />
    </div>
  );
}

export default App;
