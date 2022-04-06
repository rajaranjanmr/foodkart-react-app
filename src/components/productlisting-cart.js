import Rating from "../components/rating";

function ProuductListingCart({ value, addToCart, addToWishList }) {
  return (
    <div className="card">
      <div className="image-resp-container">
        <img
          src={value.image}
          className="image-resp home-image-card"
          alt="delicious biryani"
          style={{ width: "100%" }}
        />
      </div>
      <h1>{value.item}</h1>
      <p className="price">₹{value.price}</p>
      <p>
        {value.description}{" "}
        <span className="rating">[{(" ", value.rating)}]</span>
      </p>
      <div className="card-btn-add">
        <p>
          <button onClick={addToCart}>cart</button>
        </p>
        <p>
          <button onClick={addToWishList}>wishlist</button>
        </p>
      </div>
    </div>
  );
}
export default ProuductListingCart;
