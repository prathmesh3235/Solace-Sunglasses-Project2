import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BsCartCheckFill } from "react-icons/bs";
import products from "../data/product_data";
import LOGO from "../assets/Logo_SOLACE.png";

const SecondHeader = ({ userId, onClickJetztKaufen }) => {
  const [showVideoPage, setShowVideoPage] = useState("null");
  const [productId, setProductId] = useState("null");
  const [product, setProduct] = useState("null");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    console.log("searchParams", searchParams.get("product_id"));
    setShowVideoPage(searchParams.get("mode"));
    setProductId(searchParams.get("product_id"));
    // setProduct(products.filter((product) => product.id == productId)[0]);
  }, []);

  useEffect(() => {
    setProduct(products.filter((product) => product.id == productId)[0]);
  }, [productId]);

  const handleClick = () => {
    console.log("handleClick Jetzt Kaufen", product);
    if (userId) {
      // Update the database
      onClickJetztKaufen(product.product_name + " " + new Date());
    }
  };

  return (
    <MainHeader2 id="header">
      <NavLink to={`/home?mode=${showVideoPage}&userId=${userId}`}>
        <div className="logo-img">
          <img
            src={LOGO}
            width="120px"
            height="100px"
            alt="my logo img"
            href="/home"
          />
        </div>
      </NavLink>
      <div>
        <NavLink
          onClick={handleClick}
          to="/thankyou"
          className="navbar-link-cart"
        >
          <div className="cartbutton">
            <h3>Jetzt Kaufen</h3>
            <BsCartCheckFill size={55} />
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
    display: flex;
    font-size: 20px !important;
    margin-right: 5rem;
  }
  .cartbutton h3 {
    margin: 2rem;
  }
`;

export default SecondHeader;
