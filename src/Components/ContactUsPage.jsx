import React from "react";

const ContactUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-600">Contact Us</h2>
          <p className="text-gray-600 mt-4">
            Have questions? We'd love to hear from you. Reach out to us using
            the form below.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Let’s work together</h2>
          <form className="max-w-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="First name"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="text"
                placeholder="Last name"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Subject"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <textarea
              placeholder="Your message"
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black mb-4"
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white py-3 px-6 rounded-md w-full md:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
