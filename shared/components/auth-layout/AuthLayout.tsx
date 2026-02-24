import { ReactNode } from "react";
import styles from "./AuthLayout.module.css";

export function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className={styles.container}>
            <div className={styles.backgroundWave}>
                <svg
                    viewBox="0 0 1440 1000"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMinYMax slice"
                    className={styles.svg}
                >
                    <defs>
                        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#7661F0" />
                            <stop offset="100%" stopColor="#332A7B" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0,300 C300,150 700,700 1100,900 C1300,1000 1440,850 1440,850 L1440,1100 L0,1100 Z"
                        fill="url(#waveGradient)"
                    />
                </svg>
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
}
