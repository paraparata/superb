import React from "react";
import styled from "@emotion/styled/macro";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
`;
const Header = styled.header`
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

const LeftNav = styled.nav`
  width: 300px;
  height: 100%;
  position: sticky;
  top: 0;
  left: 0;
  background: var(--colors-secondary);
`;
const Main = styled.main`
  width: 100%;
  height: 100%;
  background: white;
  overflow-x: scroll;
`;
const Section = styled.section`
  width: 2000px;
`;

function Home() {
  const handleOnScroll = (e) => {
    e.preventDefault();
    const container = document.getElementById("container");
    var largeContainerScrollPosition = document.getElementById("container")
      .scrollLeft;
    container.scrollTo({
      top: 0,
      left: largeContainerScrollPosition + e.deltaY,
      behaviour: "smooth", //if you want smooth scrolling
    });
  };
  return (
    <Wrapper>
      {/* <Header>hey</Header> */}
      <LeftNav>safa</LeftNav>
      <Main id="container" onWheel={handleOnScroll}>
        <Section>gfdsgfds</Section>
      </Main>
    </Wrapper>
  );
}

export default Home;
