import React from "react";
import styled from "@emotion/styled/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Article = styled.article`
  /* padding: 0.5rem;
  border: thin solid var(--colors-primary); */

  h3,
  p {
    margin: 0 0 0.5rem 0;
  }

  > div:nth-of-type(1) {
    margin-bottom: 4px;
    img {
      width: 100%;
      aspect-ratio: 1/1;
      object-fit: cover;
      border-radius: 0.5rem;
    }
  }
  > div:nth-of-type(2) {
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;

    a {
      color: var(--colors-text-light);
      display: flex;
      align-items: center;
      text-decoration: none;
    }
    img {
      width: 32px;
      height: 32px;
      margin-right: 0.5rem;
      border-radius: 100%;
    }

    > div:nth-of-type(1) {
      flex-grow: 1;
      display: flex;
      > div > div:nth-of-type(2) {
        font-size: small;
      }
    }
    & > div:nth-of-type(2) {
      display: flex;
      align-items: center;
      color: var(--colors-accent-4);
      font-size: small;
    }
  }
`;

function PostCard({
  username = "paraparata",
  nickname = "Paraparata",
  imgProfile = "https://paraparata.github.io/img/pp_400x400.jpg",
  linkProfile = "#",
  linkPost = "#",
  imgPost = "https://bluesyemre.files.wordpress.com/2014/11/196.jpg",
  title = "Post Title",
  desc = "Post Desc",
  date = "5min ago",
}) {
  return (
    <Article>
      <div>
        <a href={linkPost}>
          <img src={imgPost} alt={title}></img>
        </a>
        {/* <h3>{title}</h3>
        <p>{desc}</p> */}
      </div>
      <div>
        <div>
          <a href={linkProfile}>
            <img src={imgProfile} alt={`${username} profile`}></img>
          </a>
          <div>
            <div>
              <a href={linkProfile}>
                <span>{nickname}</span>
                <span
                  style={{ marginLeft: "4px", color: "var(--colors-accent-4)" }}
                >
                  @{username}
                </span>
              </a>
            </div>
            <div>
              <span style={{ color: "var(--colors-accent-4)" }}>{date}</span>
            </div>
          </div>
        </div>
        <div>
          <FontAwesomeIcon icon="heart" />
          <span style={{ marginLeft: "4px" }}>120</span>
        </div>
      </div>
      <div></div>
    </Article>
  );
}

export default PostCard;
