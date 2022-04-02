import { Link } from "react-router-dom";
import { apiCall } from "../utility/apiCall"
import Rating from "../components/rating"
function ProuductListingCart({value}){
    
   console.log(value);
    return(
        <div className="card">
            <div className="image-resp-container">
            <img src={value.image} className ="image-resp home-image-card" alt="delicious biryani" style={{width:"100%"}} />
            </div>
                    <h1>{value.item}</h1>
                    <p className="price">{value.price}</p>
                    <p>{value.description}<Rating></Rating></p>
                    <div className="card-btn-add">
                        <p><Link to="#">cart</Link></p>
                        <p><Link to="#" >wishlist</Link></p>
                    </div>
                  </div>
    )
}
export default ProuductListingCart