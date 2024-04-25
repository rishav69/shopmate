import { remove } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import "./CartCard.css";

export const CartCard = ({product}) => {
  const dispatch = useDispatch();

  const {name, price ,image} = product;
  return (
    <div className="cartCard">
    <img src={product.image} alt={product.name} />
    <p className="productName">{product.name}</p>
    <p className="productPrice">${product.price}</p> 

    <button onClick={() => dispatch(remove(product))}>Remove</button>
    </div>
  )
}
