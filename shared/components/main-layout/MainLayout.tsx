"use client";

import { Sidebar } from "@/shared/components/sidebar/Sidebar";
import styles from "./MainLayout.module.css";
import { ReactNode } from "react";

export function MainLayout({ children }: { children: ReactNode }) {
    return (
        <div className={styles.layout}>
            <Sidebar />
            <main className={styles.mainContent}>
                {children}
            </main>
        </div>
    );
}
