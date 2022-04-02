import './productlisting.css'
import imagebiryani from '../assets/images/biryaniimg.jpeg'
import imagethali from '../assets/images/thalis.jpeg'
import imagecake from '../assets/images/cakes.jpeg'
import imagechinese from '../assets/images/chinese.webp'

import './filter.css'
function ProductListing(){
    return(
        <div className="container">
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
                    <div className="card-sub-section">
                        <div className="card">
                    <img src={imagebiryani} className ="home-image-card" alt="delicious biryani" style={{width:"100%"}} />
                    <h1>Biryanis</h1>
                    <p clclassNameass="price">₹100* Onwards</p>
                    <p>Order from best resturants</p>
                    <div className="card-btn-add">
                        <p><a href="#">cart</a></p>
                        <p><a href="#" >wishlist</a></p>
                    </div>
                  </div>
                  
                  <div className="card">
                    <img src={imagethali} className ="home-image-card" alt="delicious thali" style={{width:"100%"}} />
                    <h1>Thalis</h1>
                    <p className="price">₹100* Ownwards</p>
                    <p>Order from best resturants</p>
                    <div className="card-btn-add">
                        <p><a href="#">cart</a></p>
                        <p><a href="#" >wishlist</a></p>
                        </div>
                  </div>

                  <div className="card">
                    <img src={imagecake} className ="home-image-card" alt="delicious cake" style={{width:"100%"}} />
                    <h1>Cakes and Pastries</h1>
                    <p className="price">₹100* Onwards</p>
                    <p>Order from best resturants</p>
                    <div className="card-btn-add">
                        <p><a href="#">cart</a></p>
                        <p><a href="#" >wishlist</a></p>
                    </div>
                  </div>
                  </div>

                  <div className="card-sub-section">
                  <div className="card">
                    <img src={imagechinese}  className ="home-image-card" alt="delicious chinese" style={{width:"100%"}} />
                    <h1>Chinese</h1>
                    <p className="price">₹100* Ownwards</p>
                    <p>Order from best resturants</p>
                    <div className="card-btn-add">
                        <p><a href="#">cart</a></p>
                        <p><a href="#" >wishlist</a></p>
                    </div>
                    
                  </div>

                  <div className="card">
                    <img src={imagecake}className ="home-image-card" alt="delicious cake" style={{width:"100%"}} />
                    <h1>Cakes and Pastries</h1>
                    <p className="price">₹100* Onwards</p>
                    <p>Order from best resturants</p>
                    <div className="card-btn-add">
                        <p><a href="#">cart</a></p>
                        <p><a href="#" >wishlist</a></p>
                    </div>
                  </div>

                  <div className="card">
                    <img src={imagechinese} className ="home-image-card" alt="delicous chinese" style={{width:"100%"}} />
                    <h1>Chinese</h1>
                    <p className="price">₹100* Ownwards</p>
                    <p>Order from best resturants</p>
                    <div className="card-btn-add">
                        <p><a href="#">cart</a></p>
                        <p><a href="#" >wishlist</a></p>
                    </div>
                  </div>
    </div>
                
                <div class="card-sub-section">

                  <div className="card">
                    <img src={imagebiryani} className ="home-image-card" alt="delicious biryani" style={{width:"100%"}} />
                    <h1>Chinese</h1>
                    <p className="price">₹100* Ownwards</p>
                    <p>Order from best resturants</p>
                    <div className="card-btn-add">
                        <p><a href="#">cart</a></p>
                        <p><a href="#" >wishlist</a></p>
                    </div>
                  </div>

                  <div className="card">
                    <img src={imagecake} className ="home-image-card" alt="delicious cake" style={{width:"100%"}} />
                    <h1>Cakes and Pastries</h1>
                    <p className="price">₹100* Onwards</p>
                    <p>Order from best resturants</p>
                    <div className="card-btn-add">
                        <p><a href="#">cart</a></p>
                        <p><a href="#" >wishlist</a></p>
                    </div>
                  </div>

                  <div className="card">
                    <img src={imagechinese} className ="home-image-card" alt="delicious chinese" style={{width:"100%"}} />
                    <h1>Chinese</h1>
                    <p className="price">₹100* Ownwards</p>
                    <p>Order from best resturants</p>
                    <div className="card-btn-add">
                        <p><a href="#">cart</a></p>
                        <p><a href="#" >wishlist</a></p>
                    </div>
                  </div>
</div>

    <div className="card-sub-section">

    <div className="card">
                    <img src={imagecake} className ="home-image-card" alt="delicious cake" style={{width:"100%"}} />
                    <h1>Cakes and Pastries</h1>
                    <p className="price">₹100* Onwards</p>
                    <p>Order from best resturants</p>
                    <div className="card-btn-add">
                        <p><a href="#">cart</a></p>
                        <p><a href="#" >wishlist</a></p>
                    </div>
                  </div>

                  <div className="card">
                    <img src={imagechinese} className ="home-image-card" alt="delicious chinese" style={{width:"100%"}} />
                    <h1>Chinese</h1>
                    <p className="price">₹100* Ownwards</p>
                    <p>Order from best resturants</p>
                    <div className="card-btn-add">
                        <p><a href="#">cart</a></p>
                        <p><a href="#" >wishlist</a></p>
                    </div>
                  </div>

                  <div className="card">
                    <img src={imagechinese} className ="home-image-card" alt="delicious chinese" style={{width:"100%"}} />
                    <h1>Chinese</h1>
                    <p className="price">₹100* Ownwards</p>
                    <p>Order from best resturants</p>
                    <div className="card-btn-add">
                        <p><a href="#">cart</a></p>
                        <p><a href="#" >wishlist</a></p>
                        </div>
                  </div>

        </div>
        </div>

            </div>
            
    )
}
export {ProductListing}