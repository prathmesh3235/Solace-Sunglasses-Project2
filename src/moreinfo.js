import React, { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import Nav from "./Components/Nav";
import SecondHeader from "./Components/SecondHeader";
import Footer from "./Components/Footer";
import styled from "styled-components";
import data from "./data/product_data";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { doc, setDoc, arrayUnion } from "@firebase/firestore";
import { db } from "./services/firebase";

const Moreinfo = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  ReactGA.send({
    hitType: "pageview",
    page: window.location.href,
    title: "MoreInfo Page",
  });
  const urlParams = new URLSearchParams(window.location.search);
  const product_id = urlParams.get("product_id");
  const userId = urlParams.get("userId");
  const product = data.filter((product) => product.id == product_id)[0];
  // const [openFeatures, setOpenFeatures] = useState("")
  const [openFeaturesUV, setOpenFeaturesUV] = useState(false);
  const [openFeaturesPOL, setOpenFeaturesPOL] = useState(false);
  const [openFeaturesZU, setOpenFeaturesZU] = useState(false);
  const [openFeaturesSEH, setOpenFeaturesSEH] = useState(false);

  const handleClick = (feature) => {
    console.log("handleClick", feature, userId);

    const ref = doc(db, "users", userId); // Firebase creates this automatically
    let data = {
      "Clicked Feature": arrayUnion(feature + " " + new Date()),
    };
    try {
      setDoc(ref, data, { merge: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <div className="secondHeader">
        <SecondHeader userId={userId} />
      </div>
      <div id="top" className="moreinfopage">
        <hr />
        <h1>Produktdetails </h1>
        <hr />
        <h2>
          {product.uv_tag}
          <AiOutlinePlus
            size={25}
            onClick={() => {
              setOpenFeaturesUV(!openFeaturesUV);
              handleClick("UV-Filter");
            }}
          />{" "}
        </h2>
        <p style={{ display: openFeaturesUV ? "block" : "none" }}>
          {product.UV_FilterDescription}
        </p>
        <hr />

        <h2>
          {product.Polarisierung_tag}
          <AiOutlinePlus
            size={25}
            onClick={() => {
              setOpenFeaturesPOL(!openFeaturesPOL);
              handleClick("Polarisierung");
            }}
          />{" "}
        </h2>
        <p style={{ display: openFeaturesPOL ? "block" : "none" }}>
          {product.PolarisierungDescription}
        </p>
        <hr />
        <h2>
          {product.Zubehör}
          <AiOutlinePlus
            size={25}
            onClick={() => {
              setOpenFeaturesZU(!openFeaturesZU);
              handleClick("Zubehör");
            }}
          />{" "}
        </h2>
        <p style={{ display: openFeaturesZU ? "block" : "none" }}>
          {product.ZubehörDescription}
        </p>
        <hr />
        <h2>
          {product.Premium_tag}
          <AiOutlinePlus
            size={25}
            onClick={() => {
              setOpenFeaturesSEH(!openFeaturesSEH);
              handleClick("Sehstärke");
            }}
          />
        </h2>
        <p style={{ display: openFeaturesSEH ? "block" : "none" }}>
          {product.Premium_description}
        </p>
        <hr />
      </div>
      <Footer />
    </Wrapper>
  );
};
const Wrapper = styled.section``;

export default Moreinfo;
