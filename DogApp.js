import React from "react";
import "./DogApp.css";
import Header from './Header';
import About from './About';
import Shop from './Shop';
import Menu from './Menu';
import Clients from './Clients';
import ShopNow from './DogShopNow';

function DogApp() {
  return (
    <div>
      <Header />
      <About />
      <Shop />
      <Menu />
      <Clients />
      <ShopNow />
    </div>
  );
}

export default DogApp;
