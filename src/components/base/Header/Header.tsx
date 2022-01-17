import React from "react";
import cn from "classnames";
import styles from "./Header.module.scss";

import Login from "../../auth/Login";
import { Button } from "../../ui";
import { Search } from "../../base";

import logo from "../../../assets/superb-logo.svg";

export const Header = ({ ...props }) => {
  const classNames = cn(styles.header);

  const handleOnChange = (e: any) => {
    console.log(e);
  };

  return (
    <header className={classNames} {...props}>
      <div>
        {/* <span className={styles.title}>Superb!</span> */}
        <img src={logo} alt="superb!" height="38" />
      </div>
      <div>
        <Search
          className={styles["full-width"]}
          placeholder="Search"
          onChange={(e) => handleOnChange(e)}
        />
      </div>
      <div>
        <Login />
        <Button>SignUp</Button>
      </div>
    </header>
  );
};

export default Header;
