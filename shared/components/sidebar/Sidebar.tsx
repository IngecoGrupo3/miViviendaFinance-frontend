"use client";

import { FiUsers, FiHome, FiUser, FiLogOut } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";

export function Sidebar() {
    const pathname = usePathname();

    const menuItems = [
        { href: "/clientes", label: "Clientes", icon: FiUsers },
        { href: "/viviendas", label: "Viviendas", icon: FiHome },
    ];

    const bottomItems = [
        { href: "/perfil", label: "Perfil", icon: FiUser },
        { href: "/login", label: "Salir", icon: FiLogOut },
    ];

    return (
        <aside className={styles.sidebar}>
            <div className={styles.menuSection} style={{ marginTop: "2rem" }}>
                {menuItems.map((item) => {
                    const isActive = pathname === item.href || (item.href === "/clientes" && pathname === "/");
                    const Icon = item.icon;
                    return (
                        <Link key={item.href} href={item.href} className={styles.menuItem}>
                            {isActive && (
                                <>
                                    <div className={styles.activeBackground}></div>
                                    <div className={styles.activeIndicator}></div>
                                </>
                            )}
                            <div className={styles.iconContainer}>
                                <Icon size={24} color={isActive ? "var(--main-purple)" : "white"} />
                            </div>
                            <div className={`${styles.textContainer} ${isActive ? styles.activeText : ""}`}>
                                {item.label}
                            </div>
                        </Link>
                    );
                })}
            </div>

            <div className={styles.menuSection} style={{ marginBottom: "2rem" }}>
                {bottomItems.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;
                    return (
                        <Link key={item.href} href={item.href} className={styles.menuItem}>
                            {isActive && (
                                <>
                                    <div className={styles.activeBackground}></div>
                                    <div className={styles.activeIndicator}></div>
                                </>
                            )}
                            <div className={styles.iconContainer}>
                                <Icon size={24} color={isActive ? "var(--main-purple)" : "white"} />
                            </div>
                            <div className={`${styles.textContainer} ${isActive ? styles.activeText : ""}`}>
                                {item.label}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </aside>
    );
}
