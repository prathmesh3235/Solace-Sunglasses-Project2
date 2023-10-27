import React, { useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import IMG from "../assets/Logo_SOLACE.png";
import { BsCartCheckFill } from "react-icons/bs";
import { doc, setDoc, arrayUnion } from "@firebase/firestore";
import { db } from "../services/firebase";
import products from "../data/product_data";

const SecondHeader = ({ userId }) => {
  // const searchParams = new URLSearchParams(window.location.search);
  // const userId = searchParams.get("userId");
  // const searchParams = new URLSearchParams(window.location.search);
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
      const ref = doc(db, "users", userId); // Firebase creates this automatically
      let data = {
        "Clicked Jetzt Kaufen": arrayUnion(
          product.product_name + " " + new Date()
        ),
      };
      try {
        setDoc(ref, data, { merge: true });
      } catch (err) {
        console.log(err);
      }
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
    margin-right: 2rem;
  }
  .cartbutton h3 {
    margin: 2rem;
  }
`;
export default SecondHeader;
