"use client";

import { ReactNode, useState } from "react";
import { FiSearch, FiHome, FiFileText, FiEdit2, FiTrash2, FiPlus } from "react-icons/fi";
import { MainLayout } from "@/shared/components/main-layout/MainLayout";
import { Table, Column } from "@/shared/components/table/Table";
import { Button } from "@/shared/components/button";
import { AsignarViviendaModal } from "@/shared/components/asignar-vivienda-modal/AsignarViviendaModal";
import styles from "./page.module.css";
import Link from "next/link";

type Cliente = {
    id: string;
    nombres: string;
    dni: string;
    correo: string;
    celular: string;
};

const mockData: Cliente[] = [
    { id: "1", nombres: "Juan Perez", dni: "70104585", correo: "juanp@gmail.com", celular: "998547522" },
    { id: "2", nombres: "Juan Perez", dni: "70104585", correo: "juanp@gmail.com", celular: "998547522" },
    { id: "3", nombres: "Juan Perez", dni: "70104585", correo: "juanp@gmail.com", celular: "998547522" },
];

export default function ClientesPage() {
    const [asignarViviendaOpen, setAsignarViviendaOpen] = useState(false);

    const columns: Column<Cliente>[] = [
        { key: "nombres", header: "Nombres", align: "center", width: "20%" },
        { key: "dni", header: "DNI", align: "center", width: "15%" },
        {
            key: "correo",
            header: "Correo electrónico",
            align: "center",
            width: "25%",
            render: (item) => <Link href={`mailto:${item.correo}`} className={styles.emailLinks}>{item.correo}</Link>
        },
        { key: "celular", header: "Celular", align: "center", width: "15%" },
        {
            key: "acciones",
            header: "Acciones",
            align: "center",
            width: "25%",
            render: (item) => (
                <div className={styles.actionsContainer}>
                    <button
                        className={styles.actionBtn}
                        aria-label="Asignar vivienda"
                        onClick={() => setAsignarViviendaOpen(true)}
                    >
                        <FiHome size={22} color="#5C82E6" />
                        <span className={styles.homePlus}>+</span>
                    </button>
                    <Link href={`/clientes/${item.id}/calculadora`} className={styles.actionBtn} aria-label="Calculadora financiera">
                        <FiFileText size={22} color="#5C82E6" />
                    </Link>
                    <button className={styles.actionBtn} aria-label="Editar"><FiEdit2 size={22} color="#454545" /></button>
                    <button className={styles.actionBtn} aria-label="Eliminar"><FiTrash2 size={22} color="#D64545" /></button>
                </div>
            )
        },
    ];

    return (
        <MainLayout>
            <div className={styles.container}>
                <h1 className={styles.pageTitle}>Clientes</h1>
                <hr className={styles.titleDivider} />

                <div className={styles.topActionsRow}>
                    <div className={styles.searchWrapper}>
                        <FiSearch className={styles.searchIcon} color="#aaa" />
                        <input
                            type="text"
                            placeholder="Buscar"
                            className={styles.searchInput}
                        />
                    </div>
                    <Button
                        color="soft"
                        weight="bold"
                        style={{ backgroundColor: "#D8E2FF", color: "var(--main-purple)", borderRadius: "9999px" }}
                        icon={<span style={{ fontSize: '1.2rem', lineHeight: '0' }}>+</span>}
                    >
                        Nuevo Cliente
                    </Button>
                </div>

                <Table data={mockData} columns={columns} />
            </div>

            <AsignarViviendaModal
                open={asignarViviendaOpen}
                onClose={() => setAsignarViviendaOpen(false)}
            />
        </MainLayout>
    );
}
