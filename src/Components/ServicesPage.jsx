import React from "react";

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: "Mobile Repair Services",
      description:
        "Get your smartphones repaired by certified technicians. We provide quick and reliable repair services for all major brands.",
      icon: "🔧", // Use icons or SVGs here
    },
    {
      id: 2,
      title: "Same-Day Delivery",
      description:
        "Order your favorite gadgets and get same-day delivery within the city. Fast and hassle-free service guaranteed!",
      icon: "🚚",
    },
    {
      id: 3,
      title: "Affordable Financing Options",
      description:
        "Buy now and pay later with our flexible financing plans. Available for all major devices.",
      icon: "💳",
    },
    {
      id: 4,
      title: "Trade-In and Exchange Offers",
      description:
        "Upgrade your old device with our trade-in program. Get the best value for your old gadgets.",
      icon: "♻️",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Page Title */}
      <div className=" bg-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold">Our Services</h2>
          <p className="text-gray-600 mt-2">
            Premium services designed to meet your mobile needs.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl">{service.icon}</div>
              <h3 className="text-lg font-medium mt-4">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold">Need Assistance?</h2>
          <p className="mt-2">
            Contact us today for expert guidance and personalized solutions.
          </p>
          <button className="mt-4 bg-white text-blue-600 px-6 py-2 rounded shadow hover:bg-gray-100 transition">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
