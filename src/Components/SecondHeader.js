import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BsCartCheckFill } from "react-icons/bs";
import products from "../data/product_data";
import LOGO from "../assets/Logo_SOLACE.png";

const SecondHeader = ({ userId, onClickJetztKaufen }) => {
  const [mode, setMode] = useState("null");
  const [productId, setProductId] = useState("null");
  const [product, setProduct] = useState("null");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    console.log("searchParams", searchParams.get("product_id"));
    setMode(searchParams.get("mode"));
    setProductId(searchParams.get("product_id"));
    // setProduct(products.filter((product) => product.id == productId)[0]);
  }, []);

  useEffect(() => {
    setProduct(products.filter((product) => product.id == productId)[0]);
  }, [productId]);

  const handleClick = (str) => {
    console.log("handleClick Jetzt Kaufen", str);
    if (userId) {
      // Update the database
      onClickJetztKaufen(JSON.stringify(str) + " " + new Date());
    }
  };

  return (
    <MainHeader2 id="header">
      <div className="logoButton">
        <NavLink to={`/home?mode=${mode}&userId=${userId}`}>
          <div className="logo-img">
            <img
              src={LOGO}
              width="90px"
              height="70px"
              alt="my logo img"
              href="/home"
            />
          </div>
        </NavLink>
        <div>
          <NavLink
            to={`/home?mode=${mode}&userId=${userId}`}
            className="homeButton"
            onClick={handleClick}
          >
            <h5> Home</h5>
          </NavLink>
        </div>
      </div>

      <div>
        <NavLink
          onClick={() => handleClick("Solace Oasis")}
          to={`/thankyou?mode=${mode}&userId=${userId}`}
          className="navbar-link-cart"
        >
          <div className="cartbutton">
            <BsCartCheckFill className="carticon" size={35} />
            <h3>Jetzt Kaufen Solace Oasis</h3>
          </div>
        </NavLink>
        <NavLink
          onClick={() => handleClick("Solace Paradise")}
          to={`/thankyou?mode=${mode}&userId=${userId}`}
          className="navbar-link-cart"
        >
          <div className="cartbutton">
            <BsCartCheckFill className="carticon" size={35} />
            <h3>Jetzt Kaufen Solace Paradise</h3>
          </div>
        </NavLink>
      </div>
    </MainHeader2>
  );
};

const MainHeader2 = styled.header`
  background-color: #fce698;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .cartbutton {
    font-size: 20px !important;
    margin-right: 5rem;
  }

  .carticon {
    margin-top: 1rem;
  }

  .homeButton h5 {
    font-size: 2rem !important;
    color: rgb(54, 79, 107);
    margin-top: 3rem;
    padding: 1rem;
    font-weight: bold;
  }
  .cartbutton h3 {
    // width: 50%;
    font-size: 15px;
    padding-top: 2rem;
  }
  .logoButton {
    display: flex;
  }
  .cartbutton {
    display: flex;
  }

  @media (max-width: 1024px) {
    .logoButton {
      width: 70% !important;
    }
  }

  @media (max-width: 918px) {
    .logoButton {
      width: 50% !important;
    }
  }

  @media (max-width: 532px) {
    .logo-img {
      display: none;
    }
    .logoButton {
      width: 30% !important;
    }
    .cartbutton h3 {
      font-size: 10px;
    }
  }
`;

export default SecondHeader;
