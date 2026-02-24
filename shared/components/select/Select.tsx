import type { SelectHTMLAttributes } from "react";
import styles from "./Select.module.css";
import { FiChevronDown } from "react-icons/fi";

export type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, "className"> & {
    error?: string;
};

export function Select({ error, id, children, ...rest }: SelectProps) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.selectContainer}>
                <select id={id} className={`${styles.select} ${error ? styles.selectError : ""}`} {...rest}>
                    {children}
                </select>
                <div className={styles.iconWrapper}>
                    <FiChevronDown size={20} className={styles.icon} />
                </div>
            </div>
            {error && <span className={styles.errorMessage}>{error}</span>}
        </div>
    );
}
