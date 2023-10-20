import React, { useState } from "react";
import styled from "styled-components";
const Model3D = ({ image }) => {
  const [section, setSection] = useState(3);
  const Wrapper = styled.section`
    background-image: url("${(props) => ""}");
    background-repeat: no-repeat;
    height: 100%;
    .list li {
      width: 20%;
      height: 800px;
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
  return (
    <Wrapper
      style={{
        backgroundImage: `url(${image ? image[section] : ""})`,
        height: "800px",
        width: "900px",
      }}
    >
      <ul className="list">
        <li value={0} onMouseEnter={(e) => setSection(e.target.value)}></li>
        <li value={1} onMouseEnter={(e) => setSection(e.target.value)}></li>
        <li value={2} onMouseEnter={(e) => setSection(e.target.value)}></li>
        <li value={3} onMouseEnter={(e) => setSection(e.target.value)}></li>
        <li value={4} onMouseEnter={(e) => setSection(e.target.value)}></li>
      </ul>
    </Wrapper>
  );
};

export default Model3D;
