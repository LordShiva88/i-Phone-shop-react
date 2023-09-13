import PropTypes from "prop-types";
const Products = ({ product, addHandleBtn }) => {
  const { phone_name, image, price } = product;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Name: {phone_name}</h2>
          <h2 className="card-title">Price: ${price}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button
              onClick={() => addHandleBtn(product)}
              className="btn btn-outline"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
Products.propTypes = {
  product: PropTypes.object.isRequired,
  addHandleBtn: PropTypes.func.isRequired,
};
export default Products;
