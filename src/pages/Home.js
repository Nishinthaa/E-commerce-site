import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { FaSpinner } from "react-icons/fa"; 

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true); 

  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); 
        const response = await axios.get("https://fakestoreapi.com/products");
        const allProducts = response.data;

        const uniqueCategories = [
          "All",
          ...new Set(allProducts.map((product) => product.category)),
        ];

        setProducts(allProducts);
        setFilteredProducts(allProducts);
        setCategories(uniqueCategories);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false); 
      }
    };

    fetchProducts();
  }, []);


  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }


    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, searchQuery]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="home">
      <h2>Featured Products</h2>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="🔍 Search for products..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {/* Render Category Buttons */}
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Render Product Grid or Loading Spinner */}
      <div className="product-grid">
        {loading ? (
          <div className="loading">
            <FaSpinner className="spinner-icon" /> {/* Spinner Icon */}
            <p>Loading products...</p>
          </div>
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found for the selected category or search query.</p>
        )}
      </div>
    </div>
  );
};

export default Home;











