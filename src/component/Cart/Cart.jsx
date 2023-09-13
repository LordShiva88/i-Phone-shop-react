import PropTypes from "prop-types";
import CartIem from "./CartIem";
const Cart = ({ cart, totalPrice, totalRemaining, removeBtn }) => {
  return (
    <div>
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100 border rounded-md">
        <h2 className="text-xl font-semibold">Your cart</h2>
        <h2 className="text-xl font-semibold">Total Item : {cart.length}</h2>

        {cart.map((cartItem) => (
          <CartIem
            key={cartItem.id}
            cartItem={cartItem}
            removeBtn={removeBtn}
          ></CartIem>
        ))}
        <div className="space-y-1 text-right">
          <p>
            Remaining :<span className="font-semibold">{totalRemaining} $</span>
          </p>
          <p>
            Total amount:
            <span className="font-semibold">{totalPrice} $</span>
          </p>
        </div>
      </div>
    </div>
  );
};
Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
  totalRemaining: PropTypes.number.isRequired,
  removeBtn: PropTypes.func.isRequired,
};
export default Cart;
