import React, { ImgHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Image.module.scss";

export interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  gradient?: boolean;
  poster?: boolean;
  block?: boolean;
}

export const Image: React.FC<Props> = ({
  src,
  alt,
  gradient = false,
  poster = false,
  block = false,
  children,
  ...props
}) => {
  const classNames = cn(styles.wrapper, {
    [styles.gradient]: gradient,
    [styles.poster]: poster,
    [styles.block]: block,
  });

  return (
    <div className={classNames}>
      <img
        src={src}
        loading="lazy"
        className={styles.img}
        alt={alt}
        {...props}
      ></img>
      {children}
    </div>
  );
};

export default Image;
