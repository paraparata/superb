import React from "react";
import cn from "classnames";
import styles from "./NavBar.module.scss";

import { Button } from "../../ui";

const topics: any[] = [];

for (let i = 0; i < 25; i++) {
  topics.push(i);
}

export const NavBar = () => {
  const classNames = cn(styles.navbar);

  return (
    <nav className={classNames}>
      <div style={{ padding: "8px 16px" }}>
        <span style={{ color: "white", fontSize: "large" }}>#Topic</span>
        {topics.map((topic) => {
          return (
            <Button key={topic} style={{ width: "100%" }}>
              Topic
            </Button>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
