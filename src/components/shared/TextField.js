import React from "react";
import styled from "@emotion/styled/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Div = styled.div`
  padding: 0.75rem 1rem;
  display: flex;
  color: var(--colors-primary);
  border: 2px solid var(--colors-primary);
  border-radius: 0.5rem;
  font-weight: bold;

  input {
    color: inherit;
    background: inherit;
    border: none;
    outline: none;
    font-size: inherit;
  }
`;

function TextField({ children, onChange = () => {} }) {
  return (
    <Div>
      {children}
      <input placeholder="Search" onChange={onChange} />
    </Div>
  );
}

export default TextField;
