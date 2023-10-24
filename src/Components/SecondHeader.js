import React, { useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import IMG from "../assets/Logo_SOLACE.png";
import { BsCartCheckFill } from "react-icons/bs";
import { doc, setDoc } from "@firebase/firestore";
import { db } from "../services/firebase";

const SecondHeader = () => {
  // const searchParams = new URLSearchParams(window.location.search);
  // const userId = searchParams.get("userId");
  // const searchParams = new URLSearchParams(window.location.search);
  let userId;
  let showVideoPage;
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    userId = searchParams.get("userId");
    showVideoPage = searchParams.get("mode");
  }, []);
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
          onClick={() => {
            const ref = doc(db, "users", userId); // Firebase creates this automatically
            let data = {
              "Clicked Cart": true,
            };
            try {
              setDoc(ref, data, { merge: true });
            } catch (err) {
              console.log(err);
            }
          }}
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
