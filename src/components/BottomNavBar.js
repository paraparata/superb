import React from "react";
import styled from "@emotion/styled/macro";
import { mq } from "../styles/variables";

const Nav = styled.nav`
  width: 100vw;
  position: fixed;
  z-index: 10;
  left: 0;
  bottom: -3.25rem;
  background: rgb(20, 17, 20);
  transform: translateY(-${(props) => props.translateYVal}rem);
  ${mq[2]} {
    display: none;
  }

  ul {
    margin: 0;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    list-style: none;
    text-align: center;
  }

  a {
    color: var(--colors-primary);
    font-weight: bold;
    text-decoration: none;
  }
`;

function BottomNavBar({ translateYVal }) {
  return (
    <Nav aria-labelledby="bottom-navigation-bar" translateYVal={translateYVal}>
      <ul id="bottom-navigation-bar">
        <li>
          <a href="#left-nav">Nav</a>
        </li>
        <li>
          <a href="#main">ShowRoom</a>
        </li>
        <li>
          <a href="#right-nav">Info</a>
        </li>
      </ul>
    </Nav>
  );
}

export default BottomNavBar;
