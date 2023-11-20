import React, { useEffect } from "react";
import SecondHeader from "./Components/SecondHeader";
import Footer from "./Components/Footer";
import styled from "styled-components";
import { doc, setDoc } from "@firebase/firestore";
import { db } from "./services/firebase";

const Thankyoupage = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("userId");

  useEffect(() => {
    const ref = doc(db, "users", userId);
    let timeSpentData = {};
    Object.keys(sessionStorage).forEach((key) => {
      timeSpentData[key] = sessionStorage.getItem(key);
    });
    try {
      setDoc(ref, timeSpentData, { merge: true });
    } catch (err) {
      console.log("error cart button");
      console.log(err);
    } finally {
      sessionStorage.removeItem("timeSpentOnHomePage");
      sessionStorage.removeItem("timeSpentOnSingleProductPage");
      sessionStorage.removeItem("timeSpentOnProductDetailsPage");
    }
  }, []);

  return (
    <div>
      <div className="secondHeader">
        <SecondHeader />
      </div>
      <h2 className="tyh2"> Vielen Dank. </h2>
      <br />{" "}
      <h3 className="tyh3">
        {" "}
        Drücken Sie nun <u>unten im Fragebogen </u>auf den “Weiter-Pfeil” und
        füllen Sie die restlichen Fragen aus{" "}
      </h3>
      <Footer />
    </div>
  );
};

export default Thankyoupage;
