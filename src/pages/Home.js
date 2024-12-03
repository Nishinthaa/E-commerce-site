import React from "react";
import banner from "../assets/banner.png";
import shoe1 from "../assets/shoe1.png";
import shoe2 from "../assets/shoe2.png";
import shoe3 from "../assets/shoe3.png";
import kurti from "../assets/kurti-dress.png";
import kids from "../assets/kids-toys.png";
import westernwear from "../assets/westernwear.png";
import  home from "../assets/home.png";
import  makeup from "../assets/makeup.png";
import  electronics from "../assets/electronics.png";
import accessories  from "../assets/accessories.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home-banner">
        <div className="promo-banner">
          <p>Extra 20% off on First Order</p>
          <button>Download Now</button>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="🔍Search for Sarees, Kurtis, Cosmetics, etc."
          />
        </div>
      </div>

      {/* Categories Section */}
      <div className="categories">
        
        <button className="category-item">
          <img src={kurti} alt="Kurti & Dress" />
          <span>Kurti & Dress</span>
        </button>
        <button className="category-item">
          <img src={kids} alt="Kids & Toys" />
          <span>Kids & Toys</span>
        </button>
        <button className="category-item">
          <img src={westernwear} alt="Westernwear" />
          <span>Westernwear</span>
        </button>
        <button className="category-item">
          <img src={home} alt="Home" />
          <span>Home</span>
        </button>
        <button className="category-item">
          <img src={makeup} alt="makeup" />
          <span>makeup</span>
        </button>
        <button className="category-item">
          <img src={accessories} alt="accessories" />
          <span>accessories</span>
        </button>
          <button className="category-item">
          <img src={electronics} alt="electronics" />
          <span>electronics</span>
       </button>
      </div>
 
      <div className="banner">
        <img src={banner} alt="Grab Winter Must-Haves" />
      </div>
      
      <h3 style={{ textAlign: "center" }}>Recently Viewed</h3>
      <div className="recently-viewed">
        <div className="product-cards">
          <img src={shoe1} alt="Shoe1" />
        </div>
        <div className="product-cards">
          <img src={shoe2} alt="Shoe2" />
        </div>
        <div className="product-cards">
          <img src={shoe3} alt="Shoe3" />
        </div>
      </div>
    </div>
  );
};

export default Home;











