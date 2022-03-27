import { Link } from 'react-router-dom'
import {Navigation} from '../components/Navigation'
import '../components/clhome.css'
import '../components/navigation.css'
import './home.css'
import biryaniimage from '../assets/images/biryaniimg.jpeg'
import thaaliimage from '../assets/images/thalis.jpeg'
import cakesimage from '../assets/images/cakes.jpeg'
import chineseimage from '../assets/images/chinese.webp'
import imageavtaar from '../assets/images/avatar-the-grinch-green-plant-recycling-symbol-food-transparent-png-1652162.png'
import React,{useState} from "react"


export default function Home(){

    const [displayLogIn,setDisplayLogIn] = useState("none")
    const [displaySignIn,setDisplaySignIn] = useState("none")
    function clickLogInHandler(){
        if(displayLogIn === "none")
        setDisplayLogIn("block")
        if(displayLogIn==="block")
        setDisplayLogIn("none")
    }
    function clickSignInHandler(){
        if(displaySignIn==="none")
        setDisplaySignIn("block")
        if(displaySignIn==="block")
        setDisplaySignIn("none")
    }
    return(
        <div className="container">
            <div className="cards">

<div className="card">

    <img src={biryaniimage} alt="biryani-pic" style={{width:"100%"}}/>
    <h1>Biryanis</h1>
    <p className="price">₹100* Onwards</p>
    <p>Order from best resturants</p>
    <p><Link to="/ProductListing">more</Link></p>
  </div>
  <div className="card">
                <img src={thaaliimage} alt="biryani-pic" className ="home-image-card" />
                <h1>Thalis</h1>
                <p className="price">₹100* Ownwards</p>
                <p>Order from best resturants</p>
                <p>< Link to="/ProductListing">more</Link></p>
              </div>
              <div className="card">
                <img src={cakesimage} alt="cake-pic" className ="home-image-card" />
                <h1>Cakes and Pastries</h1>
                <p className="price">₹100* Onwards</p>
                <p>Order from best resturants</p>
                <p>< Link to="/ProductListing">more</Link></p >
              </div>
              <div className="card">
                <img src={chineseimage} alt="chienese-food-category-pic" className ="home-image-card"/>
                <h1>Chinese</h1>
                <p className="price">₹100* Ownwards</p>
                <p>Order from best resturants</p>
                <p>< Link to="/ProductListing">more</Link></p>
              </div>
  </div>
    <div className="button-container">
        <button className="login-btn-ecom" onClick={()=>clickLogInHandler()}>Login</button>
        <button className="signup-btn-ecom" onClick={()=>clickSignInHandler()}>Signup</button>
    </div>
    <div id="idlogin" className="login-container" style={{display:displayLogIn,zIndex:"3"}}>
      
      <form className="login-content login-animate" action="" >
        <div className="imgcontainer">
          <span className="close" onClick={clickLogInHandler} >&times;</span>
          <img src={{imageavtaar}} alt="avataar image icon" className="avatar"/>
        </div>
    
        <div className="container-form">
          <label for="uname"><b>Email</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required />
    
          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />
          <i className="fa fa-eye home-fa-eye" aria-hidden="true" style={{}}></i>
            
          <button className="submit-btn">Login</button>
          
        </div>
    
        <div className="container-form">
          <button  className="cancel-btn" onClick={clickLogInHandler}>Cancel</button>
          <span className="psw">Forgot <a href="#">password?</a></span>
        </div>
      </form>
    </div>
    <div id="idsignup" className="login-container" style={{display:displaySignIn}} >
      
        <form className="login-content login-animate" action="" >
          <div className="imgcontainer">
            <span className="close" id="close-singup" onClick={clickSignInHandler}>&times;</span>
            <img src={imageavtaar} alt="avatar image icon" className="avatar"/>
          </div>
      
          <div className="container-form">
            <label for="uname"><b>Firstname</b></label>
            <input type="text" placeholder="Enter Username" name="fname" required/>

            <label for="uname"><b>Lastname</b></label>
            <input type="text" placeholder="Enter Username" name="lname" required/>
            <label for="uname"><b>Email</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required/>
      
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>
            <label for="psw-repeat"><b>Repeat Password</b></label>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
        <i className="fa fa-eye" aria-hidden="true" ></i>
            
          
          </div>
      
          <div className="container-form-button">
              <button className="signup-btn-bottom cancel-btn">Sign Up</button>
            <button  className="cancel-btn-signup cancel-btn" id="cancel-btn-signup" onClick={clickSignInHandler}>Cancel</button>
            
            
          </div>
        </form>
      </div>
</div>

            
        
    )
}