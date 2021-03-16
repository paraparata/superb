import React from "react";
import styled from "@emotion/styled/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../components/shared/Button";
import PostCard from "../components/shared/PostCard";
import SearchBar from "../components/shared/TextField";

const Main = styled.main`
  flex-grow: 1;
  overflow-y: auto;
`;

const ToolBar = styled.div`
  width: 100%;
  padding-bottom: 1rem;
  position: sticky;
  top: 0;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  column-gap: 0.5rem;
  align-items: center;
  background: var(--colors-base-3);
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  margin: 1rem 0;
  object-fit: cover;
`;

function MainNav() {
  return (
    <Main>
      <ToolBar>
        <Button>
          <FontAwesomeIcon icon="hamburger" size="lg" />
        </Button>
        <SearchBar>
          <FontAwesomeIcon icon="search" style={{ marginRight: "4px" }} />
        </SearchBar>
        <Button>
          <FontAwesomeIcon icon="info" size="lg" />
        </Button>
      </ToolBar>
      <section>
        {[1, 2, 3].map((index) => (
          <div key={index} style={{ marginBottom: "4px" }}>
            <PostCard />
          </div>
        ))}
      </section>
    </Main>
  );
}

export default MainNav;
