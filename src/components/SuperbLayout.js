import React, { useState, useRef } from "react";
import styled from "@emotion/styled/macro";
import { BREAKPOINTS as bq, mq } from "../styles/variables";

import BottomNavBar from "./BottomNavBar";
import TopNavBar from "./TopNavBar";

const Div = styled.div`
  block-size: 100%;
  height: 100vh;
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-auto-rows: 100%auto;
  grid-template-columns: 85% 100% 85%;
  column-gap: 0.5rem;
  overflow-x: auto;
  overflow-y: hidden;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  ${mq[2]} {
    height: 100%;
    padding: 1rem 0;
    grid-template-columns: 25% 50% 25%;
    overflow-x: hidden;
    overflow-y: auto;
  }

  > div {
    scroll-snap-align: center;
    padding: 0.5rem;
    color: var(--colors-text-light);
    border-radius: 0.5rem;
    ${mq[2]} {
      height: fit-content;
    }
  }

  > div:nth-of-type(1),
  > div:nth-of-type(3) {
    position: sticky;
    background: var(--colors-base-2);
    /* ${mq[2]} {
      -webkit-position: sticky;
      position: sticky;
      top: 10px;
    } */
  }

  > div:nth-of-type(1) {
    left: 0;
    top: 0;
    z-index: ${(props) => props.zIndexLeftNav};
    opacity: ${(props) => props.fadeLeftNav};
  }
  > div:nth-of-type(2) {
    display: flex;
    background: var(--colors-text-light);
  }
`;

function scaleNavT(n, divider, elelementDivider) {
  const abs = (divider * n) / elelementDivider;
  return divider - abs;
}

function SuperbLayout({ leftNav, mainNav, rightNav }) {
  const [isActive, setIsActive] = useState(3.25);
  const [onFading, setOnFading] = useState(1);
  const [cZindex, setCZindex] = useState(0);
  const divRef = useRef();
  const leftRef = useRef();

  function handleScroll() {
    const divEl = divRef.current;
    const leftEl = leftRef.current;
    const elelementDivider = leftEl.offsetWidth;

    if (divEl.scrollLeft <= elelementDivider) {
      setIsActive(scaleNavT(divEl.scrollLeft, 3.25, elelementDivider));
      setOnFading(scaleNavT(divEl.scrollLeft, 1, elelementDivider));
      setCZindex(
        -1 * (1 - Math.floor(scaleNavT(divEl.scrollLeft, 1, elelementDivider)))
      );
    } else {
      setIsActive(0);
      setOnFading(0);
      setCZindex(-1);
    }
  }

  return (
    <>
      <TopNavBar />
      <Div
        ref={divRef}
        fadeLeftNav={onFading}
        zIndexLeftNav={cZindex}
        onScroll={() => (window.innerWidth < bq[2] ? handleScroll() : null)}
      >
        <div ref={leftRef} id="left-nav">
          {leftNav}
        </div>
        <div id="main">{mainNav}</div>
        <div id="right-nav">{rightNav}</div>
      </Div>
      <BottomNavBar translateYVal={isActive} />
    </>
  );
}

export default SuperbLayout;
