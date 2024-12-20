import React, { useState, useEffect } from "react";
import product_card from "../data/product_data";
import { useNavigate } from "react-router-dom";
import { doc, setDoc, arrayUnion } from "@firebase/firestore";
import { db } from "../services/firebase";

const ProductList = ({ ref, userId }) => {
  const listItems = product_card.map((item, index) => (
    <Cell userId={userId} shoe={item} image={item.thumb} key={index} />
  ));
  return (
    <div id="productList" className="productlistHead" ref={ref}>
      <h4 className="productlistHeadh4"> Wähle dein neues Lieblingsmodell </h4>
      <div className="productlist">{listItems}</div>
    </div>
  );
};

function Cell({ shoe, image, userId }) {
  const [hover, setHover] = useState(false);
  const [mode, setMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setMode(searchParams.get("mode"));
  }, []);
  const handleClick = async () => {
    const ref = doc(db, "users", userId); // Firebase creates this automatically
    let data = {
      "Clicked Weitere Details": arrayUnion(
        shoe.product_name + " " + new Date()
      ),
    };
    try {
      await setDoc(ref, data, { merge: true });
      navigate(`/product?mode=${mode}&product_id=${shoe.id}&userId=${userId}`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src={shoe.thumb} alt="Placeholder image"></img>
        </figure>
      </div>
      <div class="card-content">
        <p class="title-product-title">{shoe.product_name}</p>

        <div class="content">
          {shoe.price + "€"}
          <br></br>
        </div>
        <button onClick={handleClick} class="button is-primary">
          <strong>Weiter</strong>
        </button>
      </div>
    </div>
  );
}

export default ProductList;
