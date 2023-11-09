import React, { useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BsCartCheckFill } from "react-icons/bs";
import products from "../data/product_data";

const SecondHeader = ({ userId, onClickJetztKaufen }) => {
  let showVideoPage;
  let productId;
  let product;

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    showVideoPage = searchParams.get("mode");
    productId = searchParams.get("product_id");
    product = products.filter((product) => product.id === productId)[0];
  }, []);

  const handleClick = () => {
    if (userId) {
      console.log("handleClick Jetzt Kaufen", userId);
      // Update the database
      onClickJetztKaufen(product.product_name + " " + new Date());
    }
  };

  return (
    <MainHeader2 id="header">
      <NavLink to={`/home?mode=${showVideoPage}&userId=${userId}`}>
        <div className="logo-img">
          <img
            src="./images/Logo_SOLACE.png"
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
