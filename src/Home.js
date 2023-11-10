import React, { useEffect, useRef } from "react";
import HeroSection from "./Components/LandingPage";
import ProductList from "./Components/ProductList";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { doc, setDoc } from "@firebase/firestore";
import { db } from "./services/firebase";

const Home = ({ ref }) => {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("userId");
  const pageStartTimeRef = useRef(Date.now()); // Use a ref to store page start time

  useEffect(() => {
    return () => {
      // Calculate the time spent on the page
      const pageEndTime = Date.now();
      const timeSpentInSeconds =
        (pageEndTime - pageStartTimeRef.current) / 1000; // Calculate time spent in seconds

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
  }, [userId]); // Include userId in the dependency array to ensure it's up to date

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
