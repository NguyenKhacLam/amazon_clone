import React from "react";
import "./../styles/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id={112}
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
            price={58.15}
            rating={5}
          />
          <Product
            id={2342}
            title="CeraVe Moisturizing Cream for Normal to Dry Skin | 19 Ounce | Fragrance Free | Packaging May Vary"
            image="https://images-na.ssl-images-amazon.com/images/I/61S7BrCBj7L._SX522_.jpg"
            price={69.69}
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id={32423523}
            title="Fjallraven, Kanken Classic Backpack for Everyday"
            image="https://images-na.ssl-images-amazon.com/images/I/71gjJZ4Df2L._AC_UX679_.jpg"
            price={69.96}
            rating={5}
          />
          <Product
            id={4546564}
            title="iOttie Easy One Touch 4 Dash & Windshield Car Mount Phone Holder Desk Stand Pad & Mat for iPhone, Samsung, Moto, Huawei, Nokia, LG, Smartphones"
            image="https://images-na.ssl-images-amazon.com/images/I/718NVofDrCL._AC_SX425_.jpg"
            price={100.0}
            rating={3}
          />
          <Product
            id={56456}
            title="Acer Nitro 5 Gaming Laptop, 9th Gen Intel Core i7-9750H, NVIDIA GeForce RTX 2060, 15.6' Full HD IPS 144Hz Display, 16GB DDR4, 256GB NVMe SSD, Wi-Fi 6, Waves MaxxAudio, Backlit Keyboard, AN515-54-728C"
            image="https://images-na.ssl-images-amazon.com/images/I/71s1LRpaprL._AC_SX450_.jpg"
            price={1018.05}
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id={6234235}
            title="AmazonBasics 9 Volt Everyday Alkaline Batteries - Pack of 8"
            image="https://images-na.ssl-images-amazon.com/images/I/711MfFWIoGL._AC_SX355_.jpg"
            price={10.99}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
