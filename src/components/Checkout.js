import { Link } from "react-router-dom";
import "../pages/Cart.css";

function Checkout(props) {
  let tots = 0;
  let totPrice = 0;
  let dis =0
  let del = props.value[0].del
    function totalCalculation(){
  for(let i =0;i<props.value.length;i++){
    dis += props.value[i].dis
    tots+=(props.value[i].price)*(props.value[i].qty)
    
  }
  totPrice = (tots + del) - dis;
}
totalCalculation()
 
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
          <p>{dis}</p>
        </div>

        <div className="delivery-det">
          <p>Del charge</p>
          <p>{del}</p>
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
