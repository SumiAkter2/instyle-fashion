import "./App.css";
import Header from "./Components/Header/Header";

import { Routes, Route } from "react-router-dom";
import Shop from "./Components/Shop/Shop";
import DetailInfo from "./Components/DetailInfo/DetailInfo";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/shop/:productId" element={<DetailInfo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
