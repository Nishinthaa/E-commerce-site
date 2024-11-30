import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { total } = location.state || { total: 0, cart: [] };

  const [formData, setFormData] = useState({
    paymentMethod: "online", 
    cardNumber: "",
    cardHolderName: "",
    expiryDate: "",
    cvv: "",
    address: "",
    city: "",
    zipCode: "",
  });
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.paymentMethod === "cod") {
      setMessage("Order placed successfully with Cash on Delivery!");
    } else {
      setMessage("Processing payment...");
      setTimeout(() => {
        setMessage("Payment successful! Thank you for your order.");
      }, 2000);
    }

    setTimeout(() => {
      navigate("/"); 
    }, 3000);
  };

  return (
    <div className="payment-page">
      <h2>Payment Details</h2>
      <p>Total Amount: ${total}</p>
      <form className="payment-form" onSubmit={handleSubmit}>
        {/* Address Fields */}
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="123 Main Street"
            required
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            placeholder="City"
            required
          />
        </label>
        <label>
          ZIP Code:
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
            placeholder="123456"
            required
          />
        </label>

        {/* Payment Method Selection */}
        <label>
          Payment Method:
          <div>
            <input
              type="radio"
              name="paymentMethod"
              value="online"
              checked={formData.paymentMethod === "online"}
              onChange={handleInputChange}
            />
            Online Payment
          </div>
          <div>
            <input
              type="radio"
              name="paymentMethod"
              value="cod"
              checked={formData.paymentMethod === "cod"}
              onChange={handleInputChange}
            />
            Cash on Delivery (COD)
          </div>
        </label>

        {/* Conditional Card Details Section */}
        {formData.paymentMethod === "online" && (
          <>
            <label>
              Card Number:
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                placeholder="XXXX-XXXX-XXXX-XXXX"
                required
              />
            </label>
            <label>
              Card Holder Name:
              <input
                type="text"
                name="cardHolderName"
                value={formData.cardHolderName}
                onChange={handleInputChange}
                placeholder="John Doe"
                required
              />
            </label>
            <label>
              Expiry Date:
              <input
                type="month"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              CVV:
              <input
                type="password"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                placeholder="XXX"
                required
              />
            </label>
          </>
        )}

        <button type="submit" className="pay-now-btn">
          {formData.paymentMethod === "cod" ? "Place Order" : "Pay Now"}
        </button>
      </form>
      {message && <p className="payment-message">{message}</p>}
    </div>
  );
};

export default PaymentPage;



