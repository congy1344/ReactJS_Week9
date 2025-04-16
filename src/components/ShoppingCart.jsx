import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, updateQuantity } from "../store/cartSlice";

function ShoppingCart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  // Danh sách sản phẩm mẫu để người dùng thêm vào giỏ
  const products = [
    { id: 1, name: "Apple", price: 1.2 },
    { id: 2, name: "Banana", price: 0.8 },
    { id: 3, name: "Orange", price: 1.5 },
  ];

  return (
    <div className="shopping-cart">
      <h2>Product List</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => dispatch(addItem(product))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <div className="quantity-control">
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity - 1)
                  }
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity + 1)
                  }
                >
                  +
                </button>
              </div>
              <button onClick={() => dispatch(removeItem(item.id))}>
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      <div className="cart-total">
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default ShoppingCart;
