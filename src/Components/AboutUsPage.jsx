import React from "react";
import { FaHeadset, FaMobileAlt, FaUserShield } from "react-icons/fa";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}

      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-600">About Us</h2>
          <p className="text-gray-600 mt-4">
            Discover our journey, values, and commitment to exceptional service.
          </p>
        </div>
      </section>

      {/* About Us Content */}
      <section className="container mx-auto px-4 py-8 space-y-12">
        {/* Who We Are */}
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <div className="w-full h-0 pb-[66.67%] relative overflow-hidden rounded-lg shadow-md">
              <img
                src="https://stream.jdmagicbox.com/thumbnail/gallery-1jf7hgqtot-0522px522_x522_110112115755_c9j5-0bb9fbaea6d1d43359704b471e34fb70/jd-Ott_720x540_Thumbnail.0000009.jpg"
                alt="About Us"
                className="absolute inset-0 w-full  -top-[13rem] "
              />
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
            <h3 className="text-2xl font-semibold text-blue-600">Who We Are</h3>
            <p className="text-gray-600 mt-4">
              Established in 2011, Narayan Mobile Shop has grown to become one
              of the most trusted names in mobile sales and services in Lucknow.
              Located in Nishatganj, we cater to a diverse clientele, offering
              the latest mobile devices, repair services, and accessories.
            </p>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="flex flex-col lg:flex-row-reverse items-center">
          <div className="lg:w-1/2">
            <div className="w-full h-0 pb-[66.67%] relative overflow-hidden rounded-lg shadow-md">
              <img
                src="https://content.jdmagicbox.com/comp/lucknow/j5/0522px522.x522.110112115755.c9j5/catalogue/narayan-mobile-shop-nishatganj-lucknow-mobile-phone-dealers-5rxngvbple.jpg"
                alt="Mission and Vision"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:w-1/2 lg:pr-8 mt-8 lg:mt-0">
            <h3 className="text-2xl font-semibold text-blue-600">
              Our Mission & Vision
            </h3>
            <p className="text-gray-600 mt-4">
              Our mission is to provide high-quality mobile products and
              services that exceed customer expectations. We envision a future
              where technology is accessible, reliable, and tailored to every
              individual’s needs.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-blue-600">
            Why Choose Us?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex items-center mb-4">
                <FaHeadset className="text-blue-600 text-3xl mr-4" />
                <h4 className="text-lg font-medium text-gray-800">
                  Exceptional Customer Service
                </h4>
              </div>
              <p className="text-gray-600 mt-2">
                Our friendly staff is always ready to assist you with your
                mobile needs.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex items-center mb-4">
                <FaMobileAlt className="text-blue-600 text-3xl mr-4" />
                <h4 className="text-lg font-medium text-gray-800">
                  Wide Range of Products
                </h4>
              </div>
              <p className="text-gray-600 mt-2">
                From budget-friendly devices to premium models, we have it all.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex items-center mb-4">
                <FaUserShield className="text-blue-600 text-3xl mr-4" />
                <h4 className="text-lg font-medium text-gray-800">
                  Trusted Expertise
                </h4>
              </div>
              <p className="text-gray-600 mt-2">
                Over a decade of experience in the mobile industry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
