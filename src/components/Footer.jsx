import React from "react";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="footer_links_container">
          <ul className="footer_links">
            <li>About Us</li>
            <li>Careers</li>
            <li>Learn More</li>
            <li>Terms & Privacy</li>
          </ul>
          <div className="input_box">
            <p>Subscribe to Our Newsletter</p>
            <input type="email" name="" id="" placeholder="example@gmail.com"/>
            <button className="email_submit_btn">→</button>
          </div>
        </div>

      </section>
    </>
  );
};

export default Footer;
