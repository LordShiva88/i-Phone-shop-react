import PropTypes from "prop-types";
const CartIem = ({ cartItem, removeBtn }) => {
  const { image, phone_name, price } = cartItem;

  return (
    <div>
      <ul className="flex flex-col divide-y divide-gray-700">
        <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
          <div className="flex w-full space-x-2 sm:space-x-4">
            <img src={image} className="lg:w-10 w-20" />
            <div className="flex flex-col justify-between w-full pb-4">
              <div className="flex justify-between w-full pb-2 space-x-2">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold leadi sm:pr-8">
                    {phone_name}
                  </h3>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold">Price: {price} $</p>
                </div>
              </div>
              <div className="flex text-sm divide-x">
                <button
                  type="button"
                  onClick={() => removeBtn(cartItem)}
                  className="btn"
                >
                  <span>Remove</span>
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <hr />
    </div>
  );
};
CartIem.propTypes = {
  cartItem: PropTypes.object.isRequired,
  removeBtn: PropTypes.func.isRequired,
};
export default CartIem;
