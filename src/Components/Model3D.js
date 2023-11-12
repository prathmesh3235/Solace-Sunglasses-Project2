import React, { useState } from "react";
import styled from "styled-components";
const Model3D = ({ product }) => {
  const [section, setSection] = useState(3);
  const imageUrl = "images/3dproduct" + product + "." + section + ".png";
  const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    .list li {
      width: 20%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    ul {
    }

    .list {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 50rem;
      list-style: none;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
    div {
      width: 60%;
      background-repeat: no-repeat;
      background-size: contain;
    }
    @media screen and (max-width: 767px) {
      .list {
        height: 40rem;
      }
      div {
        width: 95%;
      }
    }
    @media screen and (max-width: 320px) {
      .list {
        height: 30rem;
      }
    }
  `;
  return (
    <Wrapper
      style={{
        width: "100%",
      }}
    >
      <div
        className="3dmodel-wrapper"
        style={{
          backgroundImage: `url(${product ? imageUrl : ""})`,
          // width: "900px",
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
      </div>
    </Wrapper>
  );
};

export default Model3D;
