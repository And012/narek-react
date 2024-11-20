import "./App.css";
import { WelcomeDialog } from "./composition-vs-inheritence";

function App() {
  // return <FancyBorder children={<div>hello world</div>} />;
  // return (
  //   <FancyBorder>
  //     <div>hello world</div>
  //     <h1>this is doubled children</h1>
  //   </FancyBorder>
  // );
  return <WelcomeDialog />;
}

export default App;
