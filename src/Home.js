import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HeroSection from "./Components/LandingPage";
import ProductDisplay from "./Components/ProductDisplay";
import Virtualtryon from "./Components/Virtualtryon";
import ProductList from "./Components/ProductList";
import App from "./App";
import Header from "./Components/Header";
import ReactGA from "react-ga4";
import Footer from "./Components/Footer";
import { doc, setDoc } from "@firebase/firestore";
import { db } from "./services/firebase";

const Home = ({ ref }) => {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("userId");
  const [pageStartTime, setPageStartTime] = useState(0); // State to store page start time

  useEffect(() => {
    setPageStartTime(Date.now()); // Record the time when the component mounts as page start time

    return () => {
      // Calculate the time spent on the page
      const pageEndTime = Date.now();
      const timeSpentInSeconds = (pageEndTime - pageStartTime) / 1000; // Calculate time spent in seconds

      // Update Firebase Firestore with the time spent
      const userRef = doc(db, "users", userId);
      setDoc(
        userRef,
        { timeSpentOnHomepage: timeSpentInSeconds },
        { merge: true }
      )
        .then(() => {
          console.log("Time spent on homepage saved in Firestore");
        })
        .catch((error) => {
          console.error(
            "Error saving time spent on homepage in Firestore:",
            error
          );
        });
    };
  }, [userId, pageStartTime]);

  const data = {
    name: "Sunny",
    description: "This is a description for the home page",
  };

  return (
    <>
      <Header />
      <HeroSection userId={userId} myData={data} />
      <div className="pcontainer">
        <ProductList userId={userId} ref={ref} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
