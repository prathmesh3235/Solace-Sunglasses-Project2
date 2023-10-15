import React, { useState } from "react";
import styled from "styled-components";
const Model3D = ({ image }) => {
  const [section, setSection] = useState(3);
  const Wrapper = styled.section`
    background-image: url("${(props) => ""}");
    background-repeat: no-repeat;
    height: 100%;
    .list li {
      width: 600px;
      height: 800px;
      display: flex;
      justify-content: center;
    }
    .list {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-around;
    }
  `;
  return (
    <Wrapper
      style={{ backgroundImage: `url(${image[section]})`, height: "1000px" }}
    >
      <ul className="list">
        <li value={0} onMouseEnter={(e) => setSection(e.target.value)}>
          d;vjs;r
        </li>
        <li value={1} onMouseEnter={(e) => setSection(e.target.value)}>
          lkskfnvkls
        </li>
        <li value={2} onMouseEnter={(e) => setSection(e.target.value)}>
          lfknvsd
        </li>
        <li value={3} onMouseEnter={(e) => setSection(e.target.value)}>
          lfnlvsnf
        </li>
        <li value={4} onMouseEnter={(e) => setSection(e.target.value)}>
          lfnlvsnf
        </li>
      </ul>
    </Wrapper>
  );
};

export default Model3D;
