import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { doc, getDoc, setDoc } from "@firebase/firestore";
import { db } from "./services/firebase";

function Login({ handleLogin }) {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = e.target.title.value.trim();

    if (userId.length > 0) {
      // Check if the user already exists in the database
      const userRef = doc(db, "users", userId);
      try {
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          // User already exists, prevent login
          alert(
            "User already exists in the database. Please use a different ID."
          );
        } else {
          // User does not exist, navigate to the home page
          const searchParams = new URLSearchParams(window.location.search);
          navigate(
            `/home?video=${
              searchParams.get("video") === "true"
            }&userId=${userId}`
          );

          // Create a new user record in the database
          const data = {
            userId: userId,
            video: searchParams.get("video") === "true",
          };

          try {
            await setDoc(userRef, data);
          } catch (err) {
            console.error(err);
          }
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="label-text">
          Bitte geben Sie noch einmal Ihren Probandencode ein (Initialen +
          Geburtstag, z.B. LV03)
        </label>
        <input required type="text" className="form-control" name="title" />
        <br />
        <input type="submit" className="btn btn-primary" value="abschicken" />
      </form>
    </div>
  );
}

export default Login;
