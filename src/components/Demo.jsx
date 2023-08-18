import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/slices/productSlice";

const Demo = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);

  if (products.isLoading === true) {
    return <h2 className="text-center">Loading...</h2>;
  }

  // dispatch action
  const handleFetchProducts = () => {
    dispatch(getProducts());
  };
  return (
    <div className="text-center">
      <Button variant="warning" onClick={handleFetchProducts}>
        Get Products
      </Button>

      {products.data?.map((product) => (
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  );
};

export default Demo;
