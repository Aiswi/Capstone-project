import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';
import {Counter} from './Basket.js'
import logo from './Petcare_img_3.jpg';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [petvis, setPetvis] = useState(false);
  const petOption = () => setPetvis(!petvis);

  const [search, setSearch] = useState(false);
  const searchView = () => setSearch(!search);

  const [navfix, setNavfix] = useState(false);
  const [scrollValue, setScrollValue] = useState(0);

  const navControl = () => {
    if(scrollValue < window.scrollY){
      setNavfix(false)
    }
    else{
      setNavfix(true)
    }
    setScrollValue(window.scrollY)
  }

  window.addEventListener('scroll', navControl);

  let pass = sessionStorage.getItem("home");

  const setpass = () => {sessionStorage.setItem("home", JSON.stringify(false))}

  return (
    <>

      <nav className={navfix ? 'navbar fix' : 'navbar'}>


        {/* rest of the icons, POSITION IN PAGE: extreme right */}
        <div id="am_nav_div_1">

          {/* petcare LOGO, POSITION IN PAGE: extreme left, STORE IMG IN: ../images */}
          <img src={logo} width="70" height="70" id='am_logo'/>

          <div id='am_nav_div_2'>

            {/* Search Icon */}
            {pass == "false" && (<i id="search" className={search ? 'bi-x' : 'bi-search'} onClick={searchView}/>)}

            {search && (
              <div>
                {/* Search bar Text field WITHOUT validation */}
                <input id="sea" type="text" placeholder="Search"/> 
            </div>
            )}

            {/* Cart Icon */}
            {pass == "false" && (<Link to={'/cart'}><img id="bag" src="https://img.icons8.com/ios-glyphs/30/000000/shopping-bag-full.png"/></Link>)}

            {/*<img id="like" src="https://img.icons8.com/ios-glyphs/30/000000/like--v1.png"/> DISREGARD THIS*/}

            {/* PETS icon Text */}
            <div id="pet" onClick={petOption}>PETS
            {petvis && (

              <div id="petList">

                {/* For DOGS page links to @Aiswi's dogs page */}
                <div className="li"><Link to={'/dogbreed'}>DOG</Link></div> 

                {/* For CATS page links to @Aiswi's cats page */}
                <div className="li"><Link to={'/catbreed'}>CAT</Link></div>

              </div>

            )}
            </div>
            
            {/* SIGN-IN icon Text */}
            {pass ? <div className="sign"><Link to={'/login'}>SIGN-IN</Link></div> : <div className='sign' onClick={setpass}>SIGN-OUT</div>}

            {/* Menu Icon */}
            <img id="menu" src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"/>

          </div>

        </div>

        
        {/* DROPDOWN for MENU icon, Activates ON mediaquery (not a list) */}
        <div id="menuList">

          <div><p>Search</p><img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"/></div>

          <div><p>Cart</p><img src="https://img.icons8.com/ios-glyphs/30/000000/shopping-bag-full.png"/></div>

          <div class="menuItem">DOG</div>

          <div class="menuItem">CAT</div>

          <div class="menuItem">SIGN-IN</div>

        </div>

      </nav>

      

    </>
  )
}


export default Navbar