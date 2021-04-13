import React, { HTMLAttributes } from "react";
import styles from "./Grid.module.scss";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: any;
}

const Grid: React.FC<Props> = ({ children, ...props }) => {
  return (
    <div className={styles.grid} {...props}>
      {children}
    </div>
  );
};

export default Grid;
