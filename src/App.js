import "./App.css";
import { Routes, Route } from "react-router-dom";
import Shop from "./Components/Shop/Shop";
import DetailInfo from "./Components/DetailInfo/DetailInfo";
import Home from "./Components/Home/Home";
import Order from "./Components/Order/Order";
import NotFound from "./Components/NotFound/NotFound";
import SearchInput from "./Components/SearchInput/SearchInput";

function App() {
  // const [cart, setCart]=useCart/
  return (
    <div className="App">
      <SearchInput />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/shops/:productId" element={<DetailInfo />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
