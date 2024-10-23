import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="footer__top--address">
                <div className="footer__top--address--icon">
                  <i className="fa fa-globe"></i>
                </div>
                <div className="footer__top--address--name">
                  <h3>Address</h3>
                  <a href="#">
                    <p>9066 Green Lake Drive Chevy Chase, MD 20815</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="footer__top--address">
                <div className="footer__top--address--icon">
                  <i className="fa fa-phone"></i>
                </div>
                <div className="footer__top--address--name">
                  <h3>WHATSAPP US</h3>
                  <a href="tel:+(1800)-88-66-990">(1800)-88-66-990</a>
                  <p>contact@example.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer__top--left">
                <h4>Download the app now!</h4>
                <div className="footer__top--left--content">
                  <div className="footer__top--left--content--icon">
                    <a href="https://play.google.com/store" target="_blank">
                      <Image
                        src="images/icons/google-play.png"
                        alt="google-play"
                        title="play-store-icon"
                      />
                    </a>
                  </div>
                  <div className="footer__top--left--content--icon">
                    <a href="https://play.google.com/store" target="_blank">
                      <Image
                        src="images/icons/app-store.png"
                        alt="app-store"
                        title="app-store-icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__middle">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-">
              <div className="footer__middle--left">
                <div className="footer__middle--left__logo">
                  <Image
                    src="images/icons/logo.svg"
                    alt="title-logo"
                    title="logo-Image"
                  />
                </div>
                <div className="footer__middle--left__content">
                  <p>
                    Medilazar Shop is proud of being a best Pharmacy Online
                    shops in USA with high-quality medicines, supplements,
                    healthcare product, …
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="footer__middle--middle">
                <div className="footer__middle--middle__content">
                  <h4>INFORMATION</h4>
                  <ul>
                    <li>
                      <a href="#">Newsroom</a>
                    </li>
                    <li>
                      <a href="#">Sell Your Pharmacy</a>
                    </li>
                    <li>
                      <a href="#">Affiliate Program</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Investor Relations</a>
                    </li>
                  </ul>
                </div>
                <div className="footer__middle--middle__content">
                  <h4>CATEGORIES</h4>
                  <ul>
                    <li>
                      <a href="#">Devices</a>
                    </li>
                    <li>
                      <a href="#">Family Care</a>
                    </li>
                    <li>
                      <a href="#">Fitness</a>
                    </li>
                    <li>
                      <a href="#">Lifestyle</a>
                    </li>
                    <li>
                      <a href="#">Personal Care</a>
                    </li>
                  </ul>
                </div>
                <div className="footer__middle--middle__content">
                  <h4>OUR SERVICES</h4>
                  <ul>
                    <li>
                      <a href="#">Shipping</a>
                    </li>
                    <li>
                      <a href="#">Return</a>
                    </li>
                    <li>
                      <a href="#">Product Recalls</a>
                    </li>
                    <li>
                      <a href="#">Contect Us</a>
                    </li>
                    <li>
                      <a href="#">Site Map</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="footer__middle--right">
                <h4>SOCIALS</h4>
                <ul>
                  <li>
                    <a className="facebook" href="#">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a className="twitter" href="#">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a className="linkedin" href="#">
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a className="pinterset" href="#">
                      Pinterest
                    </a>
                  </li>
                  <li>
                    <a className="email" href="#">
                      Email
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom--items row">
            <div className="footer__bottom--items__content col-lg-10">
              <p>Our Payment Partners :</p>

              <a href="">
                {" "}
                <Image
                  src="images/icons/payment.png"
                  alt="payment"
                  title="payment-Image"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__base">
        <div className="container">
          <div className="footer__base--content">
            <div className="footer__base--content__copyright">
              <p>
                Copyright © 2020{" "}
                <span>
                  <a href="#"> Medilazar.</a>
                </span>{" "}
                All Rights Reserved.
              </p>
            </div>
            <ul className="footer__base--content__nav">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Store</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contect</a>
              </li>
              <li>
                <a href="#">faq</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
