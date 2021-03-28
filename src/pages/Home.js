import React, { useState, useEffect } from "react";
import styled from "@emotion/styled/macro";
import { imgFlip } from "../services/imgFlip";

import ToolBar from "../components/shared/ToolBar";
import Navigation from "../components/Navigation";
import PostCard from "../components/shared/PostCard";

import superbGIF from "../assets/superb.gif";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
`;

const MainDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: white;

  > main {
    flex-grow: 1;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: max-content;
    gap: 2.5rem;
    border-left: 6px solid var(--colors-shadow);
    border-top: 6px solid var(--colors-shadow);
    overflow-y: scroll;
  }
`;

function Home() {
  const [samples, setSamples] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    _getImgFlip();
  }, []);

  const _getImgFlip = async () => {
    const res = await imgFlip();
    setIsLoaded(true);
    setSamples(res.data.memes);
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Wrapper>
        <Navigation />
        <MainDiv>
          <ToolBar />
          <main>
            <div style={{ marginBottom: "4px" }}>
              <PostCard imgPost={superbGIF} />
            </div>
            {samples.map((sample) => (
              <div key={sample.id} style={{ marginBottom: "4px" }}>
                <PostCard imgPost={sample.url} />
              </div>
            ))}
          </main>
        </MainDiv>
        <Navigation />
      </Wrapper>
    );
  }
}

export default Home;
