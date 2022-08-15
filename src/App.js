import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Shop from "./Components/Shop/Shop";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Shop />}></Route>
      </Routes>
    </div>
  );
}

export default App;
