import type { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "className"> & {
    label?: string;
    error?: string;
};

export function Input({
    label,
    error,
    id,
    type = "text",
    ...rest
}: InputProps) {
    return (
        <div className={styles.wrapper}>
            {label && (
                <label htmlFor={id} className={styles.label}>
                    {label}
                </label>
            )}
            <input
                id={id}
                type={type}
                className={`${styles.input} ${error ? styles.inputError : ""}`}
                {...rest}
            />
            {error && <span className={styles.errorMessage}>{error}</span>}
        </div>
    );
}
