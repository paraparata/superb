import React from "react";
import cn from "classnames";
import styles from "./PostCard.module.scss";

import HeartIcon from "../../icons/HeartFill";

export interface Post {
  username?: string;
  nickname?: string;
  imgProfile?: string;
  linkProfile?: string;
  linkPost?: string;
  imgPost?: string;
  title?: string;
  desc?: string;
  date?: string;
}

export interface Props {
  post?: Post;
  variant?: "default" | "frame";
}

export const PostCard: React.FC<Props> = ({
  post = {},
  variant = "default",
  ...props
}) => {
  const {
    username,
    nickname,
    imgProfile,
    linkProfile,
    linkPost,
    imgPost,
    title,
  } = post;
  const classNames = cn(styles.card, {
    [styles["card-frame"]]: variant === "frame",
  });

  return (
    <article className={classNames}>
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
          <HeartIcon width="12" height="12" />
          <span style={{ marginLeft: "4px" }}>120</span>
        </div>
      </div>
      <div></div>
    </article>
  );
};

export default PostCard;
