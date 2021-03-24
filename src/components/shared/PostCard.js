import React from "react";
import styled from "@emotion/styled/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Article = styled.article`
  position: relative;
  color: var(--colors-text-dark);

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
    display: flex;
    align-items: center;

    a {
      color: var(--colors-text-dark);
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
      align-items: center;
      font-size: 14px;
    }
    & > div:nth-of-type(2) {
      display: flex;
      align-items: center;
      font-size: small;
    }
  }

  &:hover {
    padding: 0.85rem;
    /* left: -2px;
    top: -1px; */
    background: var(--colors-primary);
    border-radius: 0.5rem;
    box-shadow: inset -3px -4px var(--colors-shadow);
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
                <span style={{ marginLeft: "4px" }}>@{username}</span>
              </a>
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
