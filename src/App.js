import "./App.css";
import Navigation from "./Navigation";
import Header from "./Header";
import Product from "./Product";
import products from "./ProductsArr";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const handleCountIncr = () => {
    setCount(count + 1);
  };
  const handleCountDec = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <Navigation count={count} />
      <Header />
      <div class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map((el) => {
              return (
                <Product
                  imgSrc={el.imgSrc}
                  price={el.price}
                  type={el.type}
                  addFn={handleCountIncr}
                  removeFn={handleCountDec}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
