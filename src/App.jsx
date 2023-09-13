import { useState } from "react";
import "./App.css";
import Cart from "./component/Cart/Cart";
import Header from "./component/Header/Header";
import Products from "./component/Products/Products";
import { useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPice] = useState(0);
  const [totalRemaining, setRemaining] = useState(8000);

  const addHandleBtn = (product) => {
    const isExist = cart.find((item) => item.id === product.id);
    let total = product.price;

    if (isExist) {
      alert("All ready exist");
    } else {
      cart.forEach((item) => {
        total = total + item.price;
      });
      const count = parseFloat(total).toFixed(2);
      const remain = 8000 - count;
      const remaining = parseFloat(remain).toFixed(2);

      if (count > 8000) {
        return alert("You Have No Available Balance");
      } else {
        setCart([...cart, product]);
        setTotalPice(count);
        setRemaining(remaining);
      }
    }
  };

  const removeBtn = (cartItem) => {
    console.log("Hello World", cartItem.id);
  };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container mx-auto">
      <Header cart={cart} totalPrice={Number(totalPrice)}></Header>
      <div className="flex lg:flex-row flex-col gap-2">
        <div className="lg:w-3/4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
          {products.map((product) => (
            <Products
              key={product.id}
              product={product}
              addHandleBtn={addHandleBtn}
            ></Products>
          ))}
        </div>
        <div className="lg:w-1/4 w-full">
          <Cart
            cart={cart}
            removeBtn={removeBtn}
            totalPrice={Number(totalPrice)}
            totalRemaining={Number(totalRemaining)}
          ></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
