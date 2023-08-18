import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { getProducts } from "../redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.product);
  console.log(cartProducts);

  useEffect(() => {
    // api call
    try {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((result) => setProducts(result));
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleAddToCart = (product) => {
    // dispatch add action
    dispatch(addToCart(product));
  };

  const cards = products?.map((product) => (
    <div className="col-md-3" key={product.id}>
      <Card style={{ width: "20rem", margin: "15px 0" }}>
        <div className="text-center p-2">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "150px", height: "200px" }}
          />
        </div>
        <Card className="p-4">
          <Card.Title>{product.category}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
          <Button
            variant="warning"
            style={{ width: "150px", margin: "auto" }}
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </Button>
        </Card>
      </Card>
    </div>
  ));

  return (
    <>
      <h2 className="text-center my-3">Our Products</h2>
      <div className="container text-center m-auto row">{cards}</div>
    </>
  );
};

export default Products;
