import "./productlisting.css";
import React, { useState, useContext } from "react";
import "./filter.css";
import ProuductListingCart from "../components/productlisting-cart";
import { categoryHandler } from "../utility/filter-functions";
import { useProductContext } from "../context/product-page-context";
import { addToCart } from "../utility/cart-function";
import { CartContext, CartContextProvider } from "../context/cart-context";
import { WishListing } from "../components/wishlisting";
import { useWishList } from "../context/wishlist-context";
import { addToWishList } from "../utility/wishlist-function";

function ProductListing() {
  const {
    productPageState: { categoryName, productList },
  } = useProductContext();

  const [range, setRange] = useState(null);
  const [radio, setRadio] = useState(0);
  const { cart, setCart } = useContext(CartContext);
  const { wishList, setWishList } = useWishList();
  const [checkCategory, setCheckCategory] = useState({
    veg: false,
    nonveg: false,
    gravy: false,
    dry: false,
  });

  function radioBasis(list, radio) {
    if (radio === 0) {
      return list;
    }
    const filteredData = [...list].filter((x) =>
      Number(x.price < Number(radio))
    );
    return filteredData;
  }

  function checkBoxFilter(list, category) {
    const { veg, nonveg, gravy, dry } = category;
    if (veg && nonveg && gravy && dry) {
      return list;
    }
    if (veg && nonveg && gravy) {
      return [...list].filter(
        (item) =>
          item.type === "veg" || item.type === "nonveg" || item.type === "gravy"
      );
    }
    if (nonveg) {
      return [...list].filter((item) => item.type === "nonveg");
    }
    return list;
  }

  function rangeFilter(list, range) {
    if (range === null) {
      return list;
    }
    const filteredData = [...list].filter(
      (x) => Number(x.rating) === Number(range)
    );
    return filteredData;
  }

  const categoryProducts = categoryHandler(productList, categoryName);
  const sortByPrice = radioBasis(categoryProducts, radio);
  const sortByCat = checkBoxFilter(sortByPrice, checkCategory);
  const filterByRating = rangeFilter(sortByCat, range);

  console.log(categoryProducts);
  console.log(sortByPrice);
  console.log(filterByRating);

  return (
    <div className="wrapper">
      <div className="filter-section">
        <div className="filter-container">
          <div className="filter-top-contain">
            <div className="filter-top-header">
              <h3>Filters</h3>
            </div>
            <div className="clear-all">Clear all</div>
          </div>

          <div className="filter-price-basis">
            <div className="subheading-filter">Price :</div>
            <label className="radios">
              <input
                type="radio"
                name="price"
                value="low"
                onClick={() => setRadio(120)}
              />
              70-120
            </label>
            <label className="radios">
              <input
                type="radio"
                name="price"
                value="low"
                onClick={() => setRadio(180)}
              />
              130-180
            </label>
            <label className="radios">
              <input
                type="radio"
                name="price"
                value="low"
                onClick={() => setRadio(220)}
              />
              190-220
            </label>
            <label className="radios">
              <input
                type="radio"
                name="price"
                value="low"
                onClick={() => setRadio(300)}
              />
              230-300
            </label>
          </div>
          <div className="filter-category-basis">
            <div className="subheading-filter">Category :</div>
            <div className="checkboxes">
              <input
                type="checkbox"
                id="veg"
                name="veg"
                value="veg"
                onClick={(e) =>
                  setCheckCategory((prev) => ({ ...prev, veg: true }))
                }
              />
              <label for="veg">Vegeterian</label>
            </div>
            <div className="checkboxes">
              <input
                type="checkbox"
                id="nonveg"
                name="non-veg"
                value="nonveg"
                onClick={(e) =>
                  setCheckCategory((prev) => ({ ...prev, nonveg: true }))
                }
              />
              <label for="nonveg">Non-Veg</label>
            </div>
            <div className="checkboxes">
              <input
                type="checkbox"
                id="gravy"
                name="gravy"
                value="gravy"
                onClick={(e) =>
                  setCheckCategory((prev) => ({ ...prev, gravy: true }))
                }
              />
              <label for="veg">Gravy</label>
            </div>

            <div className="checkboxes">
              <input
                type="checkbox"
                id="dry"
                name="dry"
                value="dry"
                onClick={(e) =>
                  setCheckCategory((prev) => ({ ...prev, dry: true }))
                }
              />
              <label for="dry">Dry</label>
            </div>
          </div>
          <div className="filter-rating-basis">
            <div className="subheading-filter">Rating :</div>
            <input
              type="range"
              min="1"
              max="5"
              className="slider"
              onClick={(e) => setRange(e.target.value)}
            />
          </div>
          
        </div>
      </div>

      <div className="cards-section">
        {filterByRating.map((x) => {
          return (
            <ProuductListingCart
              value={x}
              addToCart={() => addToCart(x, setCart)}
              addToWishList={() => addToWishList(x, setWishList)}
            />
          );
        })}
      </div>
    </div>
  );
}
export { ProductListing };
