import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartProduct = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    // dispatch an remove action
    dispatch(removeFromCart(id));
  };

  const cards = cartProduct.map((product) => (
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
            variant="danger"
            style={{ width: "150px", margin: "auto" }}
            onClick={() => handleRemoveFromCart(product.id)}
          >
            Remove Item
          </Button>
        </Card>
      </Card>
    </div>
  ));
  return (
    <>
      {cartProduct.length === 0 && (
        <p className="text-lg-center">No Item found..</p>
      )}
      <div className="row container m-auto text-center">{cards}</div>
    </>
  );
};

export default Cart;
