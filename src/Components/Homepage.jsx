import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { Link } from "react-router-dom";

const Homepage = () => {
  const testimonials = [
    {
      text: "Narayan Mobile Shop offers excellent service and amazing pricing. Their team always ensures I get the best deals with top-notch customer service.",
      name: "Sajan Sheikh",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2TgOv9CMmsUzYKCcLGWPvqcpUk6HXp2mnww&s",
    },
    {
      text: "The best place in town for mobile purchases and repairs. I got my phone fixed quickly, and the prices are unbeatable.",
      name: "Pankaj Kumar",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2TgOv9CMmsUzYKCcLGWPvqcpUk6HXp2mnww&s",
    },
    {
      text: "Narayan Mobile Shop is my go-to for mobile accessories. I always find what I need with great customer service!",
      name: "Vinay Pandey",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2TgOv9CMmsUzYKCcLGWPvqcpUk6HXp2mnww&s",
    },
  ];
  const products = [
    {
      imageUrl:
        "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_hero_09142021_inline.jpg.large.jpg",
      product: "iPhone 13",
      price_per_day: "₹86",
      description:
        "The iPhone 13 offers advanced dual cameras and A15 Bionic chip for outstanding performance.",
    },
    {
      imageUrl:
        "https://swapphone.nl/wp-content/uploads/2024/05/iPhone-14-Geel-6-600x600-1.webp",
      product: "iPhone 14",
      price_per_day: "₹101",
      description:
        "The iPhone 14 features an improved camera system and a sleek design for everyday excellence.",
    },
    {
      imageUrl:
        "https://www.imagineonline.store/cdn/shop/files/iPhone_15_Blue_PDP_Image_Position-1__en-IN.jpg",
      product: "iPhone 15",
      price_per_day: "₹90",
      description:
        "Experience the new dynamic island and groundbreaking camera features with the iPhone 15.",
    },
    {
      imageUrl:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-white?wid=5120&hei=2880&fmt=webp&qlt=70&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4OWhabGVFdVhnaExpMWhzbVh0SzhIT09MekhWSGZtV1pvV240QzNuTk80VXhseHVZcEw1SmhqcElaQkJMTm9FMytjRGRjd0V1bkY3a0xXbUtlY3VlTmc&traceId=1",
      product: "iPhone 16",
      price_per_day: "₹104",
      description:
        "Cutting-edge technology and futuristic design define the iPhone 16 experience.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  const sendWhatsAppMessage = (message) => {
    const phoneNumber = "919208881234"; // Replace with the desired phone number (with country code)
    const encodedMessage = encodeURIComponent(message); // Encode the message to be URL-safe
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-white h-screen py-16 ">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="flex-1 text-center pr-8  text-wrap md:text-left">
            <p className="text-sm text-yellow-600 font-bold mb-2">
              👋 Hello All
            </p>
            <h1 className="text-4xl font-bold mb-4">
              Welcome to ,
              <br />
              Narayan Mobile Shop!
            </h1>
            <p>
              Your trusted destination for top mobile phone brands, exceptional
              repair services, and exclusive offers. We provide same-day
              delivery and ensure customer satisfaction with the best pricing
              and promotions.
            </p>
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <Link to="/products" className="block">
                <button className="bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition">
                  View Offers
                </button>
              </Link>
              <button className="border border-black py-3 px-6 rounded-md">
                <a
                  href="https://wa.me/919208881234"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Whatsapp Me
                </a>
              </button>
            </div>
          </div>
          <div className="flex-1 mt-8 md:mt-0">
            <img
              className="rounded-md shadow-md"
              src="https://content.jdmagicbox.com/comp/lucknow/j5/0522px522.x522.110112115755.c9j5/catalogue/narayan-mobile-shop-nishatganj-lucknow-mobile-phone-dealers-t8vzvljztk.jpg"
              alt="Designer"
            />
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Best Product</h2>

            <button className="bg-white text-black hover:bg-blue-300 py-2 px-4 rounded-md">
              <Link to="/products" className="block">
                View more Products
              </Link>
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row bg-white text-black rounded-md shadow-md overflow-hidden"
              >
                {/* Product Image */}
                <img
                  src={product.imageUrl}
                  alt={product.product}
                  className="w-full lg:w-1/3 h-48 object-cover"
                />

                {/* Product Details */}
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      {product.product}
                    </h3>
                    <p className="text-gray-700 mb-2">
                      Price per day: <strong>{product.price_per_day}</strong>
                    </p>
                    <p className="text-gray-700">{product.description}</p>
                  </div>

                  {/* WhatsApp Button */}
                  <button
                    onClick={() =>
                      sendWhatsAppMessage(
                        `Hi, I'm interested in the ${product.product}. Can you provide more details?`
                      )
                    }
                    className="w-[60%] px-4 py-2 bg-slate-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-16  bg-white">
        {" "}
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          {" "}
          <div className="flex-1">
            {" "}
            <h2 className="text-3xl font-bold mb-4">
              Discover Narayan Mobile Shop
            </h2>{" "}
            <p className="text-gray-700 mb-4">
              {" "}
              Since 2011, Narayan Mobile Shop has been the go-to destination for
              all your mobile phone needs in Nishatganj, Lucknow. With an
              extensive selection of top brands like Oppo, Realme, Samsung, MI,
              Lava, Nokia, and more, we make sure you're always equipped with
              the latest tech.{" "}
            </p>{" "}
            <p className="text-gray-700 mb-4">
              {" "}
              But we're not just about selling phones! Our expert team provides
              premium mobile repair services, including authorized repairs for
              popular brands like Samsung, Realme, and MI. Plus, we offer fast,
              reliable same-day delivery to get you connected in no time.{" "}
            </p>{" "}
            <p className="text-gray-700 mb-4">
              {" "}
              At Narayan Mobile Shop, we’re committed to offering unbeatable
              prices and exceptional service. Whether you’re upgrading your
              phone, fixing an old one, or taking advantage of our latest
              offers, we’re here to make your experience effortless and
              enjoyable.{" "}
            </p>{" "}
            <p className="text-gray-700 mb-4">
              {" "}
              Thanks for choosing us as your trusted mobile partner in Lucknow.
              We can’t wait to serve you and help you find exactly what you’re
              looking for!{" "}
            </p>{" "}
            <Link to="/contact-us">
              <button className="bg-black text-white py-3 px-6 mt-6 rounded-md">
                {" "}
                Get in Touch{" "}
              </button>{" "}
            </Link>
          </div>{" "}
          <div className="flex-1">
            {" "}
            <img
              src="https://content.jdmagicbox.com/comp/lucknow/j5/0522px522.x522.110112115755.c9j5/catalogue/narayan-mobile-shop-nishatganj-lucknow-mobile-phone-dealers-hpof7igaki.jpg"
              alt="Narayan Mobile Shop"
              className="rounded-md shadow-md"
            />{" "}
          </div>{" "}
        </div>{" "}
      </section>
      {/* {this si the review } */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Some Generous Words</h2>
          <p className="text-gray-600 mb-8">
            Some of our happy customers sharing their experiences
          </p>
          <div className="flex items-center justify-center gap-8">
            <button
              onClick={handlePrev}
              className="text-2xl text-gray-400 hover:text-black"
            >
              ❮
            </button>

            <div className="max-w-md">
              <div className="flex items-center justify-center mb-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={`Reviewer ${currentIndex + 1}`}
                  className="rounded-full mr-4"
                />
                <div>
                  <blockquote className="italic text-gray-700 mb-4">
                    {testimonials[currentIndex].text}
                  </blockquote>
                  <p className="font-bold">{testimonials[currentIndex].name}</p>
                </div>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="text-2xl text-gray-400 hover:text-black"
            >
              ❯
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
