import React from "react";
import styled from "@emotion/styled/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "./Button";
import SearchBar from "./TextField";

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--colors-base-3);

  > div {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
`;

function ToolBar() {
  return (
    <Wrapper>
      <div>
        <Button width="fit-content">
          <FontAwesomeIcon icon="hamburger" size="lg" />
        </Button>
        <SearchBar>
          <FontAwesomeIcon icon="search" style={{ marginRight: "4px" }} />
        </SearchBar>
      </div>
      <div>
        <Button width="fit-content">
          <FontAwesomeIcon icon="info" size="lg" />
        </Button>
      </div>
    </Wrapper>
  );
}

export default ToolBar;
