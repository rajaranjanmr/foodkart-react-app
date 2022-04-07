import { Link } from "react-router-dom";
import { WishListing } from "../components/wishlisting";
import { useWishList } from "../context/wishlist-context";

export default function Wishlist() {
  const { wishList } = useWishList();

  return (
    <div>
      <div className="header-cart">
        <h1>************ Welcome to your Wishlist ************</h1>
      </div>

      <div className="cards cards-ecom-change">
        {wishList.map((x) => {
          return <WishListing value={x} />;
        })}
      </div>
    </div>
  );
}
