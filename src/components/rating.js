import { useState } from "react"
import './rating.css'

function Rating(){
    const [rate,setRate] = useState(0)
    console.log()
    return(
<div className="star-rating">
  <input type="radio" id="5-stars" name="rating" value="5" />
  <label for="5-stars" className="star">&#9733;</label>
  <input type="radio" id="4-stars" name="rating" value="4" />
  <label for="4-stars" className="star">&#9733;</label>
  <input type="radio" id="3-stars" name="rating" value="3" />
  <label for="3-stars" className="star">&#9733;</label>
  <input type="radio" id="2-stars" name="rating" value="2" checked="true" />
  <label for="2-stars" className="star">&#9733;</label>
  <input type="radio" id="1-star" name="rating" value="1" />
  <label for="1-star" className="star">&#9733;</label>
</div>
    )
}
export default Rating

