"use client";

import { useState } from "react";
import { FiUserPlus, FiLogIn } from "react-icons/fi";
import { Button } from "@/shared/components/button";
import { Modal } from "@/shared/components/modal";
import styles from "./page.module.css";

export default function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className={styles.page}>
    <header className={styles.header}>
        <h1 className={styles.title}>Galería</h1>
        <p className={styles.subtitle}>Componentes reutilizables y ejemplos interactivos.</p>
    </header>

    <section className={styles.section}>
        <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Buttons</h2>
        </div>

        <div className={styles.card}>
            <h3 className={styles.cardTitle}>Variantes</h3>
            <p>Props: color (purple, orange, soft) y weight para el texto (normal, bold)</p>
            <div className={styles.row}>
            <Button color="purple" weight="bold">
                Iniciar Sesión
                </Button>

            <Button color="orange" weight="normal">
                CREAR CLIENTE
                </Button>

            <Button color="soft" weight="normal">
                Ver detalles
                </Button>
        </div>
        </div>

        <div className={styles.card}>
            <h3 className={styles.cardTitle}>Con icono</h3>
            <p>Tambien</p>
            <div className={styles.row}>
            <Button color="orange" weight="bold" icon={<FiUserPlus size={20} />}>
                CREAR CLIENTE
            </Button>
            <Button
                color="purple"
                weight="bold"
                icon={<FiLogIn size={20} />}
                iconPosition="right"
            >
                Iniciar sesión
            </Button>
        </div>
        </div>

        <div className={styles.card}>
            <h3 className={styles.cardTitle}>Modal</h3>
            <p>Estructura: overlay + header (título + X), body y footer.</p>
            <div className={styles.row}>
            <Button color="purple" weight="bold" onClick={() => setModalOpen(true)}>
                Abrir modal
            </Button>
            </div>
        </div>
    </section>

    <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Información socioeconómica"
        footer={<div className={styles.modalFooterPlaceholder} />}
    >
        <div className={styles.modalBodyPlaceholder} />
    </Modal>
    </main>
    );
}