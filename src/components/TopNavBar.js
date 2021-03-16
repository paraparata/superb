import React from "react";
import styled from "@emotion/styled/macro";
import { mq } from "../styles/variables";

const TopNav = styled.nav`
  width: 100vw;
  display: none;
  position: sticky;
  left: 0;
  top: 0;
  color: var(--colors-primary);
  background: #141114;
  ${mq[2]} {
    display: inline-block;
  }
`;

function TopNavBar() {
  return <TopNav>Heyoo</TopNav>;
}

export default TopNavBar;
