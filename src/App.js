import { Provider } from "react-redux";
import "./App.css";
import Body from "./component/Body";
import Header from "./component/Header";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
