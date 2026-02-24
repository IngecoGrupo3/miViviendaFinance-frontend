import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

export type ButtonColor = "orange" | "purple" | "soft";
export type ButtonWeight = "normal" | "bold";
export type ButtonIconPosition = "left" | "right";

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
  children: ReactNode;
  color?: ButtonColor;
  weight?: ButtonWeight;
  icon?: ReactNode;
  iconPosition?: ButtonIconPosition;
};

export function Button({
  children,
  color = "purple",
  weight = "bold",
  icon,
  iconPosition = "left",
  type = "button",
  disabled,
  ...rest
}: ButtonProps) {
  const className = [
    styles.root,
    styles[`color_${color}`],
    styles[`weight_${weight}`],
    disabled ? styles.disabled : null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button {...rest} type={type} disabled={disabled} className={className}>
      {icon && iconPosition === "left" && (
        <span className={styles.icon} aria-hidden>
          {icon}
        </span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className={styles.icon} aria-hidden>
          {icon}
        </span>
      )}
    </button>
  );
}
