import { ReactNode } from "react";
import styles from "./Table.module.css";

export type Column<T> = {
    key: string;
    header: string;
    render?: (item: T) => ReactNode;
    width?: string;
    align?: "left" | "center" | "right";
};

export type TableProps<T> = {
    data: T[];
    columns: Column<T>[];
    variant?: "orange" | "purple";
};

export function Table<T>({ data, columns, variant = "orange" }: TableProps<T>) {
    return (
        <div className={styles.tableContainer}>
            <table className={`${styles.table} ${styles[`table_${variant}`]}`}>
                <thead>
                    <tr>
                        {columns.map((col, idx) => (
                            <th
                                key={col.key}
                                style={{ width: col.width, textAlign: col.align || "center" }}
                                className={`${idx === 0 ? styles.firstTh : ""} ${idx === columns.length - 1 ? styles.lastTh : ""
                                    }`}
                            >
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIdx) => (
                        <tr key={rowIdx} className={rowIdx % 2 === 0 ? styles.rowEven : styles.rowOdd}>
                            {columns.map((col, colIdx) => (
                                <td
                                    key={col.key}
                                    style={{ textAlign: col.align || "center" }}
                                    className={`${colIdx === 0 ? styles.firstTd : ""} ${colIdx === columns.length - 1 ? styles.lastTd : ""
                                        }`}
                                >
                                    {col.render ? col.render(row) : (row as any)[col.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
