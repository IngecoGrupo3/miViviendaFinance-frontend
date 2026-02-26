"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiUsers, FiHome, FiUser, FiLogOut } from "react-icons/fi";
import styles from "./Sidebar.module.css";

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
}

const sidebarItems: SidebarItem[] = [
  { id: "clientes", label: "Clientes", icon: <FiUsers size={24} />, href: "/clientes" },
  { id: "viviendas", label: "Viviendas", icon: <FiHome size={24} />, href: "/viviendas" },
  { id: "perfil", label: "Perfil", icon: <FiUser size={24} />, href: "/perfil" },
  { id: "salir", label: "Salir", icon: <FiLogOut size={24} />, href: "/login" },
];

interface SidebarProps {
  isFixed?: boolean;
}

export function Sidebar({ isFixed = true }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(true);
  const [activeId, setActiveId] = useState<SidebarItem["id"]>("clientes");

  const topItems = sidebarItems.slice(0, 2);
  const bottomItems = sidebarItems.slice(2);

  const sidebarClassName = [
    styles.sidebar,
    isFixed ? "" : styles.relative,
    collapsed ? styles.collapsed : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <aside
      className={sidebarClassName}
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
    >
      <div className={styles.gradientBar}>
        <div className={styles.iconNav}>
          {topItems.map((item) => {
            const isActive = item.id === activeId;
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveId(item.id);
                }}
                className={`${styles.iconButton} ${isActive ? styles.iconButtonActive : ""}`}
              >
                {item.icon}
              </Link>
            );
          })}
        </div>

        <div className={styles.bottomIcons}>
          {bottomItems.map((item) => {
            const isActive = item.id === activeId;
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveId(item.id);
                }}
                className={`${styles.iconButton} ${isActive ? styles.iconButtonActive : ""}`}
              >
                {item.icon}
              </Link>
            );
          })}
        </div>
      </div>

      <div className={styles.contentArea}>
        <nav className={styles.nav}>
          <div className={styles.navGroup}>
            {topItems.map((item) => {
              const isActive = item.id === activeId;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveId(item.id);
                  }}
                  className={`${styles.item} ${isActive ? styles.itemActive : ""}`}
                >
                  <span className={styles.label}>{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className={styles.navGroup}>
            {bottomItems.map((item) => {
              const isActive = item.id === activeId;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveId(item.id);
                  }}
                  className={`${styles.item} ${isActive ? styles.itemActive : ""}`}
                >
                  <span className={styles.label}>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}