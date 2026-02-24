"use client";

import { useState } from "react";
import { FiUserPlus, FiLogIn } from "react-icons/fi";
import { Button } from "@/shared/components/button";
import { Modal } from "@/shared/components/modal";
import { Input } from "@/shared/components/input";
import { Stepper } from "@/shared/components/stepper";
import { Select } from "@/shared/components/select";
import { DragDropImage } from "@/shared/components/drag-drop-image";
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
                    <h3 className={styles.cardTitle}>Input</h3>
                    <p>Input text con label y error opcional</p>
                    <div className={styles.row} style={{ flexDirection: 'column', width: '100%', maxWidth: '300px' }}>
                        <Input label="Correo Electrónico" placeholder="correo@dominio.com" />
                        <Input label="Contraseña" type="password" placeholder="*************" />
                    </div>
                </div>

                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Stepper</h3>
                    <p>Indicador de pasos</p>
                    <div className={styles.row}>
                        <Stepper steps={2} currentStep={1} />
                    </div>
                    <div className={styles.row}>
                        <Stepper steps={2} currentStep={2} />
                    </div>
                </div>

                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Select</h3>
                    <p>Select con icono custom</p>
                    <div className={styles.row} style={{ flexDirection: 'column', width: '100%', maxWidth: '300px' }}>
                        <Select id="demoSelect">
                            <option>Opción 1</option>
                            <option>Opción 2</option>
                        </Select>
                    </div>
                </div>

                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Upload</h3>
                    <p>Área para subir imágenes</p>
                    <div className={styles.row} style={{ flexDirection: 'column', width: '100%', maxWidth: '400px' }}>
                        <DragDropImage />
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