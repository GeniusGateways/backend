import React, { useEffect, useState } from "react";
import "./../styles/blogPage.css";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import { backend_api } from "../App";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      console.log(`${backend_api}/api/Blog`);
      const req = await fetch(`${backend_api}/api/Blog`);
      const data = await req.json();
      console.log(data.docs); // Logs the blogs data for debugging
      setBlogs(data.docs); // Assuming the API response has the "docs" field containing blog data
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <Header />
      <HeroSection />

      <section className="blog-section">
        {/* Blog Header */}
        <div className="blog-header">
          <h1>Blog</h1>
          <span className="underline"></span>
        </div>

        {/* Dynamically render blog cards */}
        <div className="blog-cards">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog._id}>
              <div className="blog-image">
                <img
                  src={`${backend_api}${blog.image.url}`}
                  alt={blog.title || "Blog Image"}
                />
              </div>
              <div className="blog-content">
                <h2>{blog.title}</h2>
                <p>
                  {blog['short-description'] || "No description available."}
                </p>
                <Link to={`/Detail`}   state={{ blog }}
 className="read-more">
                  Read more &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogPage;
