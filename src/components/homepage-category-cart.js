import { Link } from "react-router-dom";
import { useProductContext } from "../context/product-page-context";
import { ProductListing } from "../pages/ProductListing";

function HomepageCategory(props) {
  const { productPageDispatch } = useProductContext();

  return (
    <div className="card">
      <div className="image-resp-container">
        <img src={props.value.image} alt="biryani-pic" className="image-resp" />
      </div>
      <h1>{props.value.categoryName}</h1>
      <p className="price">{props.value.priceRange}</p>
      <p>{props.value.description}</p>
      <p>
        <Link
          to="/ProductListing"
          onClick={() =>
            productPageDispatch({
              type: "CATEGORY_NAME",
              payload: props.value.categoryName,
            })
          }
        >
          more
        </Link>
      </p>
    </div>
  );
}
export default HomepageCategory;
