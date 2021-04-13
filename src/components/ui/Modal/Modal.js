import React, { useEffect } from "react";
import cn from "classnames";
import styles from "./Modal.module.scss";

export default function Modal({ show, children, onClose, ...props }) {
  const classNames = cn(styles.modal, {
    [styles.show]: show,
  });

  const handleOnPressEsc = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleOnPressEsc);
    return () => {
      document.removeEventListener("keydown", handleOnPressEsc);
    };
  }, []);

  return (
    <div className={classNames} {...props}>
      <div className={styles.blankspace} onClick={onClose} />
      {children}
    </div>
  );
}
