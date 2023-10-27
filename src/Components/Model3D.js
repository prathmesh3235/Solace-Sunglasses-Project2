import React, { useState } from "react";
import styled from "styled-components";
const Model3D = ({ product }) => {
  const [section, setSection] = useState(3);
  const Wrapper = styled.section`
    background-image: url("${(props) => ""}");
    background-repeat: no-repeat;
    // height: 100%;
    .list li {
      width: 20%;
      height: 720px;
      display: flex;
      justify-content: center;
    }
    .list {
      display: flex;
      flex-direction: row;
      max-width: 900px;
      justify-content: space-around;
    }
  `;
  const imageUrl = "images/3dproduct" + product + "." + section + ".png";
  return (
    <Wrapper
      style={{
        backgroundImage: `url(${product ? imageUrl : ""})`,
        width: "900px",
      }}
    >
      <ul className="list">
        {/* <li value={0} onMouseEnter={(e) => setSection(e.target.value)}></li> */}
        <li value={1} onMouseEnter={(e) => setSection(e.target.value)}></li>
        <li value={2} onMouseEnter={(e) => setSection(e.target.value)}></li>
        <li value={3} onMouseEnter={(e) => setSection(e.target.value)}></li>
        <li value={4} onMouseEnter={(e) => setSection(e.target.value)}></li>
        <li value={5} onMouseEnter={(e) => setSection(e.target.value)}></li>
      </ul>
    </Wrapper>
  );
};

export default Model3D;
