import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { doc, setDoc } from "@firebase/firestore"
import { db } from "./services/firebase"


function Login({handleLogin}) {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        if(e.target.title.value.length > 0)
        {
          const searchParams = new URLSearchParams(window.location.search);
          console.log("vgarigvrs", searchParams.has("video"))
          navigate(`/home?video=${(searchParams.get("video") == "true")}&userId=${e.target.title.value}`);
          const ref = doc(db, "users", e.target.title.value) // Firebase creates this automatically
          let data = {
              userId: e.target.title.value,
              video: searchParams.get("video") == "true"
          }
          try {
            setDoc(ref, data)
          } catch(err) {
              console.log(err)
          }
        }
    }
  return (
    <div>
        <form className='login-form' onSubmit={handleSubmit}>
            <label className='label-text'>Bitte geben Sie noch einmal Ihren Probandencode ein (Initialen + Geburtstag, z.B. LV03) </label>
            <input required type="text" className="form-control" name="title" />
            <br/>
            <input type='submit' className="btn btn-primary" value="abschicken" />
        </form>
    </div>
  )
}

export default Login