"use client";

import { Modal } from "@/shared/components/modal/Modal";
import { Button } from "@/shared/components/button/Button";
import Image from "next/image";
import styles from "./AsignarViviendaModal.module.css";
import { useState } from "react";

type Vivienda = {
    id: string;
    image: string;
    title: string;
    location: string;
    area: string;
    priceDolares: string;
    priceSoles: string;
};

const mockViviendas: Vivienda[] = [
    {
        id: "1",
        image: "/images/vivienda1.jpg",
        title: "Departamento familiar con balcón #5",
        location: "San Miguel, Lima",
        area: "90.74 m²",
        priceDolares: "$ 58,000",
        priceSoles: "S/. 220 000"
    },
    {
        id: "2",
        image: "/images/vivienda2.jpg",
        title: "Departamento para parejas",
        location: "Surco, Lima",
        area: "70.56 m²",
        priceDolares: "$ 48,000",
        priceSoles: "S/. 180 250"
    },
    {
        id: "3",
        image: "/images/vivienda3.jpg",
        title: "Casa grande #30",
        location: "San Isidro, Lima",
        area: "100 150 m²",
        priceDolares: "$ 80,000",
        priceSoles: "S/. 300 000"
    },
    {
        id: "4",
        image: "/images/vivienda4.jpg",
        title: "Casa grande #25",
        location: "San Borja, Lima",
        area: "120 000 m²",
        priceDolares: "$ 75,000",
        priceSoles: "S/. 285 000"
    }
];

export type AsignarViviendaModalProps = {
    open: boolean;
    onClose: () => void;
};

export function AsignarViviendaModal({ open, onClose }: AsignarViviendaModalProps) {
    const [moneda, setMoneda] = useState<"dolares" | "soles">("soles");
    const [selectedVivienda, setSelectedVivienda] = useState<string | null>("1");

    return (
        <Modal
            open={open}
            onClose={onClose}
            title=""
            maxWidth="65rem"
        >
            <div className={styles.container}>
                <h2 className={styles.modalTitle}>Asignar vivienda</h2>

                <div className={styles.headerRow}>
                    <span className={styles.monedaLabel}>Moneda:</span>
                    <label className={styles.radioLabel}>
                        <input
                            type="radio"
                            name="moneda"
                            checked={moneda === "dolares"}
                            onChange={() => setMoneda("dolares")}
                            className={styles.radioInput}
                        />
                        <span className={styles.radioText}>Dólares</span>
                    </label>
                    <label className={styles.radioLabel}>
                        <input
                            type="radio"
                            name="moneda"
                            checked={moneda === "soles"}
                            onChange={() => setMoneda("soles")}
                            className={styles.radioInput}
                        />
                        <span className={styles.radioText}>Soles</span>
                    </label>
                </div>

                <div className={styles.cardsGrid}>
                    {mockViviendas.map((vivienda) => {
                        const isSelected = selectedVivienda === vivienda.id;
                        return (
                            <div
                                key={vivienda.id}
                                className={`${styles.card} ${isSelected ? styles.cardSelected : ""}`}
                                onClick={() => setSelectedVivienda(vivienda.id)}
                            >
                                <div className={styles.cardImageContainer}>
                                    {/* Fallback to gray box if no image provided */}
                                    <div className={styles.imagePlaceholder}></div>
                                </div>
                                <div className={styles.cardContent}>
                                    <h3 className={styles.cardTitle}>{vivienda.title}</h3>
                                    <p className={styles.cardLocation}>{vivienda.location}</p>
                                    <p className={styles.cardArea}>{vivienda.area}</p>
                                    <p className={styles.cardPrice}>
                                        {moneda === "soles" ? vivienda.priceSoles : vivienda.priceDolares}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className={styles.footer}>
                    <Button color="orange" weight="bold" onClick={onClose} style={{ padding: "1rem 4rem" }}>
                        CONTINUAR
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
