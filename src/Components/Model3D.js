import React, { useState } from "react";
import styled from "styled-components";
const Model3D = ({ product }) => {
  const [section, setSection] = useState(3);
  const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Adjust this value as needed */
    background-image: url("${(props) => ""}");
    background-repeat: no-repeat;

    .list li {
      width: 20%;
      height: 720px;
      width: 800px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .list {
      list-style: none;
      display: flex;
      flex-direction: row;
      max-width: 900px;
      justify-content: space-around;
    }
  `;
  const imageUrl = "images/3dproduct" + product + "." + section + ".png";
  return (
    <Wrapper
      className="3dmodel-wrapper"
      style={{
        backgroundImage: `url(${product ? imageUrl : ""})`,
        // width: "900px",
      }}
    >
      <div className="3dmodel-wrapper">
        <ul className="list">
          {/* <li value={0} onMouseEnter={(e) => setSection(e.target.value)}></li> */}
          <li value={1} onMouseEnter={(e) => setSection(e.target.value)}></li>
          <li value={2} onMouseEnter={(e) => setSection(e.target.value)}></li>
          <li value={3} onMouseEnter={(e) => setSection(e.target.value)}></li>
          <li value={4} onMouseEnter={(e) => setSection(e.target.value)}></li>
          <li value={5} onMouseEnter={(e) => setSection(e.target.value)}></li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Model3D;
