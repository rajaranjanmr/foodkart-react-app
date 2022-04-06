import { Link } from "react-router-dom";
import "../pages/Cart.css";

function Checkout({ value }) {
  let tots = 0;
  let totPrice = 0;
  console.log("inside chedkout", value);
  function calculateTotal() {
    for (let i = 0; i < value.length; i++) {
      tots +=
        Number(value[i].price) * Number(value.qty) +
        Number(value.del) -
        Number(value.dis);
      totPrice += Number(value[i].price) * Number(value.qty);
    }
  }
  calculateTotal();
  return (
    <div className="card-checkout">
      <h1>Price Details</h1>
      <div className="bill-details">
        <div className="price-det">
          <p>Total Price</p>
          <p>₹{totPrice} </p>
        </div>

        <div className="discount-det">
          <p> Discount</p>
          <p>20</p>
        </div>

        <div className="delivery-det">
          <p>Del charge</p>
          <p>60</p>
        </div>

        <div className="tot-amount-det">
          <h3>Total Amount</h3>
          <h3>{tots}</h3>
        </div>

        <div className="card-btn-checkout">
          <Link to="#">Checkout</Link>
        </div>
      </div>
    </div>
  );
}
export { Checkout };
