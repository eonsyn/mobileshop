import React, { useState } from "react";
import ProductData from "../Products/products"; // Ensure this imports the ProductData correctly

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null); // State to store selected product for details

  const handleProductClick = (product) => {
    setSelectedProduct(product); // Set the selected product to display details
  };

  const handleCloseModal = () => {
    setSelectedProduct(null); // Close the modal
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <div className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center">
            New Year Vibes!
          </h2>
          <p className="text-center text-gray-600 mt-2">
            Best deals on the latest smartphones and accessories
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ProductData.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform cursor-pointer"
              onClick={() => handleProductClick(product)} // Click handler for opening modal
            >
              <img
                src={product.imageUrl}
                alt={product.product}
                className="w-full h-48 object-contain"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium">{product.product}</h3>
                <p className="text-blue-600 font-bold">
                  {product.price_per_day} / Day
                </p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for Product Details */}
      {selectedProduct && (
        <div
          className="fixed pt-6 inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-md"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-lg p-6 w-[80vw] max-w-4xl shadow-lg transition-transform transform hover:scale-105 flex flex-col lg:flex-row"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
          >
            {/* Image Section */}
            <img
              src={selectedProduct.imageUrl}
              alt={selectedProduct.product}
              className="w-full lg:w-1/2 h-56 lg:h-auto object-cover rounded-lg shadow-md mb-4 lg:mb-0 lg:mr-6"
            />

            {/* Product Details Section */}
            <div className="flex flex-col justify-between lg:w-1/2">
              <h2 className="text-2xl font-bold text-center lg:text-left text-gray-800 mb-4">
                {selectedProduct.product}
              </h2>

              <div className="text-gray-700">
                <p>
                  Price per day:{" "}
                  <span className="font-semibold">
                    {selectedProduct.price_per_day}
                  </span>
                </p>
                <p>
                  EMI Starting from:{" "}
                  <span className="font-semibold">
                    {selectedProduct.emi_starting_from}
                  </span>
                </p>
                <p>
                  EMI Terms:{" "}
                  <span className="font-semibold">
                    {selectedProduct.emi_terms}
                  </span>
                </p>
                <p>
                  Instant Discount:{" "}
                  <span className="font-semibold">
                    {selectedProduct.instant_discount}
                  </span>
                </p>
                <p>
                  Exchange Bonus:{" "}
                  <span className="font-semibold">
                    {selectedProduct.exchange_bonus}
                  </span>
                </p>
                <p>
                  Terms and Conditions:{" "}
                  <span className="font-semibold">
                    {selectedProduct.terms_and_conditions}
                  </span>
                </p>
                <p>
                  Available Banks:{" "}
                  <span className="font-semibold">
                    {selectedProduct.banks.join(", ")}
                  </span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex justify-between items-center">
                <button
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
                <a
                  href={`https://wa.me/919208881234?text=Hi!%20I%20am%20interested%20in%20buying%20${encodeURIComponent(
                    selectedProduct.product
                  )}%20for%20${encodeURIComponent(
                    selectedProduct.price_per_day
                  )}%20per%20day.%20Please%20provide%20more%20details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
                >
                  Contact on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
