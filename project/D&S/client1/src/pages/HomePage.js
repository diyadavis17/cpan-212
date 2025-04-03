import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import saleImage from "../images/SALE.png";
import memberImage from "../images/Hello D&M Member (1).png"; 
import mensCoOrd from "../images/mens_co-ord.webp";
import mensCheckedShirt from "../images/mens_checked_shirt.avif";
import mensRegularFitShirt from "../images/mens_regular_fit_shirt.avif";
import mensWhitePant from "../images/mens_white_pant.avif";
import womensBlackPant from "../images/womens_black_pant.avif";
import womensPrintedDress from "../images/womens_printed_dress.avif";
import womensBlackTop from "../images/womens_black_top.avif";
import womensStripeShirt from "../images/womens_stripe_shirt.avif";

function HomePage() {
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleSignUp = () => {
    handleClose();
    navigate("/login");
  };

  return (
    <div className="container-fluid p-0">
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Body className="text-center">
          <img src={memberImage} alt="Welcome Member" className="img-fluid mb-3" />
          <p>Become our exclusive member to get an additional 15% off with free shipping!</p>
          <div className="d-flex justify-content-between">
            <button className="btn-custom" onClick={handleSignUp}>Sign Up</button>
            <button className="btn-custom" onClick={handleClose}>Close</button>
          </div>
        </Modal.Body>
      </Modal>

      <div className="text-center">
        <img src={saleImage} alt="Sale Banner" className="img-fluid w-100" />
      </div>

      <div className="container">
        <h2 className="my-4 text-center">New In</h2>

        <div className="row">
          <div className="col-md-3">
            <img src={mensCoOrd} alt="Men's Co-ord" className="img-fluid" />
          </div>
          <div className="col-md-3">
            <img src={mensCheckedShirt} alt="Men's Checked Shirt" className="img-fluid" />
          </div>
          <div className="col-md-3">
            <img src={mensRegularFitShirt} alt="Men's Regular Fit Shirt" className="img-fluid" />
          </div>
          <div className="col-md-3">
            <img src={mensWhitePant} alt="Men's White Pant" className="img-fluid" />
          </div>
        </div>
        <h2 className="my-4 text-center">Women's New Arrivals</h2>

        <div className="row">
          <div className="col-md-3">
            <img src={womensBlackPant} alt="Women's Black Pant" className="img-fluid" />
          </div>
          <div className="col-md-3">
            <img src={womensPrintedDress} alt="Women's Printed Dress" className="img-fluid" />
          </div>
          <div className="col-md-3">
            <img src={womensBlackTop} alt="Women's Black Top" className="img-fluid" />
          </div>
          <div className="col-md-3">
            <img src={womensStripeShirt} alt="Women's Stripe Shirt" className="img-fluid" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer bg-light text-center text-lg-start mt-5">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Shop</h5>
              <ul className="list-unstyled mb-0">
                <li><Link to="/womens" className="text-dark">Women</Link></li>
                <li><Link to="/mens" className="text-dark">Men</Link></li>
                <li><Link to="/kids" className="text-dark">Kids</Link></li>
                <li><Link to="/home" className="text-dark">Home</Link></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Corporate Info</h5>
              <ul className="list-unstyled mb-0">
                <li><a href="#!" className="text-dark">Career</a></li>
                <li><a href="#!" className="text-dark">About</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Help</h5>
              <ul className="list-unstyled mb-0">
                <li><a href="#!" className="text-dark">Customer Service</a></li>
                <li><a href="#!" className="text-dark">My Account</a></li>
                <li><a href="#!" className="text-dark">Legal & Privacy</a></li>
                <li><a href="#!" className="text-dark">Contact</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Newsletter</h5>
              <p>Sign up to our newsletter and become a member:</p>
              <Link to="/login" className="btn btn-primary">Become a Member</Link>
            </div>
          </div>
        </div>

        <div className="text-center p-3">
          <p className="mb-0">© 2025 D&M. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
