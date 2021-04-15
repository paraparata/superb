import React, { useEffect } from "react";
import cn from "classnames";
import styles from "./Modal.module.scss";

export interface Props {
  show: boolean;
  onClose: (...args: any[]) => any;
}

export const Modal: React.FC<Props> = ({
  show,
  children,
  onClose,
  ...props
}) => {
  const classNames = cn(styles.modal, {
    [styles.show]: show,
  });

  const handleOnPressEsc = (e: any) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleOnPressEsc);
    return () => {
      document.removeEventListener("keydown", handleOnPressEsc);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classNames} {...props}>
      <div className={styles.blankspace} onClick={onClose} />
      {children}
    </div>
  );
};

export default Modal;
