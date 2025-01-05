import React from "react";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "5 Tips for Choosing the Perfect Smartphone",
      excerpt:
        "Choosing a smartphone can be challenging. Discover the top 5 tips to make an informed decision and get the perfect device for your needs.",
      image:
        "https://www.gizchina.com/wp-content/uploads/images/2023/06/flagship-smartphones-2023.jpg",
      author: "Narayan Mobile Shop",
      date: "January 1, 2025",
    },
    {
      id: 2,
      title: "How to Maintain Your Smartphone's Battery Life",
      excerpt:
        "Learn the dos and don'ts of battery maintenance to ensure your smartphone lasts longer.",
      image:
        "https://www.batteriesplus.com/4a7cc0/globalassets/blog/hero-images/power/cellphone-charging-tips.jpg",
      author: "Narayan Mobile Shop",
      date: "December 28, 2024",
    },
    {
      id: 3,
      title: "The Future of Mobile Technology: Trends for 2025",
      excerpt:
        "Explore the latest trends in mobile technology and what they mean for users in 2025.",
      image:
        "https://www.klikeri.rs/wp-content/uploads/2024/07/compressed_img-Ke8z8E1SrohyZ60sQFL9y8tC.png",
      author: "Narayan Mobile Shop",
      date: "December 15, 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-100 py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-600">Our Blog</h2>
          <p className="text-gray-600 mt-4">
            Stay updated with the latest news, tips, and insights in the world
            of mobile technology.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <Link to={`/blog/${blog.id}`}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-blue-600 hover:underline">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    By {blog.author} | {blog.date}
                  </p>
                  <p className="text-gray-700 mt-4">{blog.excerpt}</p>
                  <Link
                    to={`/blog/${blog.id}`}
                    className="text-blue-500 hover:text-blue-700 font-medium mt-4 block"
                  >
                    Read More →
                  </Link>
                </div>{" "}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
