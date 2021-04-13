import React from "react";
import cn from "classnames";
import styles from "./Header.module.scss";

import { Button } from "../../ui";
import { Search } from "../../base";

const Header = ({ ...props }) => {
  const classNames = cn(styles.header);

  const handleOnChange = (e: any) => {
    console.log(e);
  };

  return (
    <header className={classNames} {...props}>
      <div>
        {/* <span className={styles.title}>Superb!</span> */}
        <img src="/superb-logo.svg" alt="superb!" height="38" />
      </div>
      <div>
        <Search placeholder="Search" onChange={(e) => handleOnChange(e)} />
        <Button>About</Button>
      </div>
    </header>
  );
};

export default Header;
