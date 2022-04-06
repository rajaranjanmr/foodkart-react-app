import './productlisting.css'
import imagebiryani from '../assets/images/biryaniimg.jpeg'
import imagethali from '../assets/images/thalis.jpeg'
import imagecake from '../assets/images/cakes.jpeg'
import imagechinese from '../assets/images/chinese.webp'
import React,{useState,useEffect} from "react";
import { apiCall } from '../utility/apiCall'
import './filter.css'
import ProuductListingCart from '../components/productlisting-cart'
import { categoryHandler } from '../utility/filter-functions'
import { useProductContext } from '../context/product-page-context'
function ProductListing(){
    const [productList,setProducutList] = useState([])
    useEffect(()=>{
        apiCall('GET','/api/products').then((response)=>{
       setProducutList( response.data.products)
      }).catch((e)=>{
       console.log(e)

      })
   },[])

  const {productPageState: {categoryName}} = useProductContext();


    const prod = categoryHandler(productList, categoryName);
    console.log(prod, categoryName)

    return(
        <div className="wrapper">
            <div className="filter-section">
          <div className="filter-container">
            <div className="filter-top-contain">
                <div className="filter-top-header"><h3>Filters</h3></div>
                <div className="clear-all"><a href="#">Clear all</a></div>
            </div>
            
            <div className="filter-price-basis">
                <div className="subheading-filter">Price :</div>
                <div class="radios">
                    <input type="radio" name="price" value="low"/>70-120
                </div>
                <div className="radios">
                    <input type="radio" name="price" value="low" />130-180
                </div>
                <div class="radios">
                    <input type="radio" name="price" value="low" />190-220
                </div>
                <div className="radios">
                    <input type="radio" name="price" value="low" />230-300
    
                </div>
                
                
            </div>
            <div className="filter-category-basis">
                <div className="subheading-filter">Category :</div>
                <div className="checkboxes">
                    <input type="checkbox" id="veg" name="veg" value="veg" />
                <label for="veg">Vegeterian</label>
                </div>
                <div className="checkboxes">
                    <input type="checkbox" id="nonveg" name="nonveg" value="nonveg" />
                    <label for="nonveg">Non-Veg</label>
                </div>
                <div className="checkboxes">
                    <input type="checkbox" id="gravy" name="gravy" value="gravy" />
                    <label for="veg">Gravy</label>
                    </div>
    
                
                <div className="checkboxes">
                    <input type="checkbox" id="dry" name="dry" value="dry" />
                    <label for="dry">Dry</label>
                </div>
                
    
            </div>
            <div className="filter-rating-basis">
                <div className="subheading-filter">Rating :</div>
             <input type="range" min="1" max="5" value="2.5" class="slider" />
            </div>
            <div className="button-filter">
                <button type="reset">Apply</button>
            </div>
        </div>
        </div>

        <div className="cards-section">
                        {prod.map(x=>{
                            return <ProuductListingCart value={x} />
                        })}
                       
                  </div>

    
        
        

            </div>
            
    )
}
export {ProductListing}