// Contact.js
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>--GET IN TOUCH</h2>
        <h1>Write To Her</h1>
      </div>
      <div className="contact-content">
        <div className="leftSection">
          <img
            src="https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I"
            alt="Contact"
            className="contact-image"
          />
        </div>
        <div className="rightSection">
          <div className="form-container">
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Message" />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
