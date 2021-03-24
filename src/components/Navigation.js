import React from "react";
import styled from "@emotion/styled/macro";
import { BREAKPOINTS, mq } from "../styles/variables";

import Button from "../components/shared/Button";

const BORDER_RADIUS = "0.5rem";
const BORDER_RADIUS_LEFT = "0 0.5rem 0.5rem 0";
const BORDER_RADIUS_RIGHT = "0.5rem 0 0 0.5rem";

const Header = styled.header`
  /* height: 100%; */
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  color: var(--colors-text-light);
  border-radius: 0;
  background: var(--colors-base-2);

  ${mq[2]} {
    width: 300px;
    padding: 0;
  }
`;

const Topbar = styled.div`
  padding: 1rem;

  > div {
    padding: 0.75rem 1rem;
    color: var(--colors-primary);
    border: 2px solid var(--colors-primary);
    border-radius: 0.5rem;
    font-weight: bold;
  }
`;

const Hr = styled.hr`
  margin: 1.75rem 0;
  border: thin solid var(--colors-primary);
`;

const Nav = styled.nav`
  flex-grow: 1;
  padding: 1rem;
  /* padding-bottom: calc(53px - 8px); */
  overflow-y: auto;
  ul {
    margin: 0;
    padding: 0;
    display: block;
    list-style: none;
  }
  li {
    margin-bottom: 0.75rem;
  }
`;

function Navigation() {
  const handleButton = () => {
    console.log(window.innerWidth);
  };

  return (
    <Header>
      <Topbar>
        <div>
          <span>SUPERB! by paraparata</span>
        </div>
      </Topbar>
      <Nav aria-labelledby="topic-navigation">
        <ul id="topic-navigation">
          <li>
            <Button align="left" onClick={handleButton}>
              Hello Lur!
            </Button>
          </li>
          <li>
            <Button
              align="left"
              background="var(--colors-secondary)"
              onClick={handleButton}
            >
              CSS Cookies
            </Button>
          </li>
          <li>
            <Button
              align="left"
              background="var(--colors-accent-1)"
              onClick={handleButton}
            >
              WebGL Zone
            </Button>
          </li>
          <li>
            <Button
              align="left"
              background="var(--colors-accent-2)"
              onClick={handleButton}
            >
              WebAudio Station
            </Button>
          </li>
          <li>
            <Button
              align="left"
              color="var(--colors-text-light)"
              background="var(--colors-accent-3)"
              onClick={handleButton}
            >
              Arcade Wannabe
            </Button>
          </li>
        </ul>
      </Nav>
    </Header>
  );
}

export default Navigation;
