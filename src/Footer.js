import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="row row-1">
        <div className="col-2">
          <p className="title">ABOUT</p>
          <div className="content">
            <a href="#">Contact Us</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Flipkart Stories</a>
            <a href="#">Press</a>
            <a href="#">Flipkart Wholesale</a>
            <a href="#">Corporate Information</a>
          </div>
        </div>
        <div className="col-2">
          <p className="title">HELP</p>
          <div className="content">
            <a href="#">Payments</a>
            <a href="#">Shipping</a>
            <a href="#">Cancellation & Returns</a>
            <a href="#">FAQ</a>
            <a href="#">Report Infringement</a>
          </div>
        </div>
        <div className="col-2">
          <p className="title">CONSUMER POLICY</p>
          <div className="content">
            <a href="#">Return Policy</a>
            <a href="#">Terms Of Use</a>
            <a href="#">Security</a>
            <a href="#">Privacy</a>
            <a href="#">Sitemap</a>
            <a href="#">Grievance Redressal</a>
            <a href="#">EPR Compliance</a>
          </div>
        </div>
        <div className="col-2">
          <p className="title">SOCIAL</p>
          <div className="content">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">YouTube</a>
          </div>
        </div>
        <div className="address-sec col-2">
          <p className="title">Mail Us:</p>
          <div>
            <p class="_1oQ-r6">Flipkart Internet Private Limited, </p>
            <p class="_1oQ-r6"> Buildings Alyssa, Begonia &amp; </p>
            <p class="_1oQ-r6"> Clove Embassy Tech Village, </p>
            <p class="_1oQ-r6">Outer Ring Road, Devarabeesanahalli Village,</p>
            <p class="_1oQ-r6"> Bengaluru, 560103, </p>
            <p class="_1oQ-r6"> Karnataka, India</p>
          </div>
        </div>
        <div className="col-2">
          <p className="title">Registered Office Address:</p>
          <div>
            <p class="_1oQ-r6">Flipkart Internet Private Limited, </p>
            <p class="_1oQ-r6"> Buildings Alyssa, Begonia &amp; </p>
            <p class="_1oQ-r6"> Clove Embassy Tech Village, </p>
            <p class="_1oQ-r6">Outer Ring Road, Devarabeesanahalli Village,</p>
            <p class="_1oQ-r6"> Bengaluru, 560103, </p>
            <p class="_1oQ-r6"> Karnataka, India </p>
            <p class="_1oQ-r6"> CIN : U51109KA2012PTC066107 </p>
            <p class="_1oQ-r6">
              Telephone: <a href="#">044-45614700</a>
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="row-2">
        <div className="final-sec">
          <img
            src={
              "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/sell-image-9de8ef.svg"
            }
            alt=""
          />
          <a href="#">Become a Seller</a>
        </div>
        <div className="final-sec">
          <img src={"https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-image-866c0b.svg"} alt="" />
          <a href="#">Advertise</a>
        </div>
        <div className="final-sec">
          <img src={"https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/gift-cards-image-d7ff24.svg"} alt="" />
          <a href="#">Gift Cards</a>
        </div>
        <div className="final-sec">
          <img src={"https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/help-centre-image-c4ace8.svg"} alt="" />
          <a href="#">Help Center</a>
        </div>
        <div className="final-sec">
          <p>&copy;2007-2023 Flipkart.com</p>
        </div>
        <div className="final-sec">
          <img src={"https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg"} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
