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
      "Clicked Feature": arrayUnion(feature),
    };
    try {
      setDoc(ref, data, { merge: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <SecondHeader />
      <div id="top" className="moreinfopage">
        <hr />
        <h1>Produktdetails </h1>
        <hr />
        <h2>
          UV-Filter{" "}
          <AiOutlinePlus
            size={25}
            onClick={() => {
              setOpenFeaturesUV(!openFeaturesUV);
              handleClick("UV-Filter");
            }}
          />{" "}
        </h2>
        <p style={{ display: openFeaturesUV ? "block" : "none" }}>
          {" "}
          Die {product.product_name} überzeugt mit dem eingebauten UV-Filter
          "UV400" in der Stärke "medium".
          <br />
          Dieser garantiert Schutz vor Sonneneinstrahlung bis zum UV-Index 5.
        </p>
        <hr />

        <h2>
          {" "}
          Polarisierung{" "}
          <AiOutlinePlus
            size={25}
            onClick={() => {
              setOpenFeaturesPOL(!openFeaturesPOL);
              handleClick("Polarisierung");
            }}
          />{" "}
        </h2>
        <p style={{ display: openFeaturesPOL ? "block" : "none" }}>
          {" "}
          Polarisierende Sonnenbrillen bieten nicht nur Schutz vor schädlicher
          UV-Strahlung, <br />
          sie reduzieren auch unangenehme Reflexionen des Sonnenlichts. Die{" "}
          {product.product_name} ist in dieser Ausführung nicht polarisiert.
        </p>
        <hr />
        <h2>
          {" "}
          Zubehör
          <AiOutlinePlus
            size={25}
            onClick={() => {
              setOpenFeaturesZU(!openFeaturesZU);
              handleClick("Zubehör");
            }}
          />{" "}
        </h2>
        <p style={{ display: openFeaturesZU ? "block" : "none" }}>
          {" "}
          Die {product.product_name} wird mit einem Etui aus Kunstleder
          geliefert, das die Brille vor Kratzern schützt.
          <br /> Das Etui ist in der Farbe Kastanienbraun erhältlich.
        </p>
        <hr />
        <h2>
          {" "}
          Sehstärke{" "}
          <AiOutlinePlus
            size={25}
            onClick={() => {
              setOpenFeaturesSEH(!openFeaturesSEH);
              handleClick("Sehstärke");
            }}
          />
        </h2>
        <p style={{ display: openFeaturesSEH ? "block" : "none" }}>
          {" "}
          Die {product.product_name} ist auch mit angepassten Gläsern für Ihre
          Sehstärke erhältlich. <br />
          Somit lassen sich Sonnenschutz und Sehhilfe ideal kombinieren. Wir
          nehmen dafür einen Aufpreis von 49,99€.
        </p>
        <hr />
      </div>
      <Footer />
    </Wrapper>
  );
};
const Wrapper = styled.section``;

export default Moreinfo;
