import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Item } from "./Components/Item";
import { Total } from "./Components/Total";
function App() {
  const [products, setProducts] = useState([
    { product: "Product 1", price: 20 },
    { product: "Product 2", price: 5 },
    { product: "Product 3", price: 2 },
    { product: "Product 4", price: 10 },
  ]);
  const [total, setTotal] = useState(0);

  function calculateTotal(price) {
    setTotal(total + price);
  }
  function restart() {
    setTotal(0);
  }

  return (
    <div className="App">
      {products.map((item, index) => (
        <Item key={index} item={item} calculateTotal={calculateTotal}></Item>
      ))}
      <Total total={total} restart={restart}></Total>
    </div>
  );
}

export default App;
