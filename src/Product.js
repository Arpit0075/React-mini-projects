import React from "react";
import { useState } from "react";

function Product(props) {
  const [isAdded, setIsadded] = useState(false);
  const [isRemoved, setIsRemoved] = useState(true);
  const modifyIsAdded = () => {
    setIsadded(!isAdded);
    if (isRemoved) setIsRemoved(!isRemoved);
  };
  const modifyIsRemoved = () => {
    setIsRemoved(!isRemoved);
    if (isAdded) setIsadded(!isAdded);
  };

  return (
    <div className="col mb-5">
      <div className="card h-100">
        {/* <!-- Product image--> */}
        <div className="img-container">
          <img className="card-img-top" src={props.imgSrc} alt="..." />
        </div>
        {/* <!-- Product details--> */}
        <div className="card-body p-4">
          <div className="text-center">
            {/* <!-- Product name--> */}
            <h5 className="fw-bolder">{props.type}</h5>
            {/* <!-- Product price--> */}
            {props.price}
          </div>
        </div>
        {/* <!-- Product actions--> */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              disabled={isAdded}
              onClick={() => {
                props.addFn();
                modifyIsAdded();
              }}
              className="btn btn-outline-dark mt-auto"
            >
              Add to cart
            </button>
            <button
              disabled={isRemoved}
              onClick={() => {
                props.removeFn();
                modifyIsRemoved();
              }}
              className="btn btn-outline-dark mt-auto"
            >
              Remove from cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
