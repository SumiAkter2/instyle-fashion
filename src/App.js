import "./App.css";
import Header from "./Components/Header/Header";

import { Routes, Route } from "react-router-dom";
import Shop from "./Components/Shop/Shop";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Shop />}></Route>
      </Routes>
    </div>
  );
}

export default App;
