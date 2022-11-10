import "./App.css";
import { useState} from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeItem from "./components/BakeryItem"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);

  const setPrice = (name, price) => {
    let mutableCart = cart;
    if (mutableCart[name]) {
      mutableCart[name]++
    } else {
      mutableCart[name] = 1;
    }
    setCart({...mutableCart})
    setTotal(total + price);
  };

  return (
    <div className="App">
      <div className="col-bg">
        <h1>My Bakery</h1>
        <div class="bakery">
          {bakeryData.map((item, index) => (
            <BakeItem name={item.name} description={item.description} price={item.price} image={item.image} setStateOfParent={setPrice} />
          ))}
        </div>
      </div>

      <div className="col-sm cart">
        <h2>Cart</h2>
        {Object.keys(cart).map(k => (
            <p>{cart[k].toString()} X {k}</p>
          ))}
        <p>Total: ${total}</p>
      </div>
    </div>
  );
}

export default App;
