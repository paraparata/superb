import React, { HTMLAttributes } from "react";
import styles from "./MainLayout.module.scss";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const MainLayout: React.FC<Props> = ({ children, ...props }) => {
  return (
    <div className={styles["main-layout"]} {...props}>
      {children}
    </div>
  );
};

export default MainLayout;
