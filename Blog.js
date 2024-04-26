// Blog.js
import React from "react";
import "./Blog.css";
import Portfolio from "./Portfolio";

const Blog = () => {
  return (
    <div className="blog-container">
      <section className="header-section">
        <img
          src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2F5mnhwopdy5js53gvp9dj.jpg"
          alt="Blog Header"
          className="header-image"
        />
        <h1 className="header-text">Blog</h1>
        <h4>
          A blog (a truncation of "weblog") is an informational website
          consisting of discrete, often informal diary-style text entries
          (posts). Posts are typically displayed in reverse chronological order
          so that the most recent post appears first, at the top of the web
          page.
        </h4>
      </section>
      <section className="blog-section">
        <div className="blog-card">
          <img
            src="https://picsum.photos/seed/picsum/200/300"
            alt="Placeholder"
            className="blog-image"
          />
          <p className="blog-text">
            If there is none, this is where you come in.
          </p>
        </div>
        <div className="blog-card">
          <img
            src="https://picsum.photos/seed/picsum/200/300"
            alt="Placeholder"
            className="blog-image"
          />
          <p className="blog-text">
            If there is none, this is where you come in.
          </p>
        </div>
        <div className="blog-card">
          <img
            src="https://picsum.photos/seed/picsum/200/300"
            alt="Placeholder"
            className="blog-image"
          />
          <p className="blog-text">
            If there is none, this is where you come in.
          </p>
        </div>
        <div className="blog-card">
          <img
            src="https://picsum.photos/seed/picsum/200/300"
            alt="Placeholder"
            className="blog-image"
          />
          <p className="blog-text">
            If there is none, this is where you come in.
          </p>
        </div>
      </section>
      <Portfolio />
    </div>
  );
};

export default Blog;
