"use client";

import { useState } from "react";
import { CreateViviendaModal } from "@/shared/components/create-vivienda-modal";

export default function ViviendasPage() {
    const [modalOpen, setModalOpen] = useState(true);

    return (
        <main style={{ padding: "4rem", backgroundColor: "#f4f6fa", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <button
                onClick={() => setModalOpen(true)}
                style={{
                    backgroundColor: "var(--main-purple)",
                    color: "white",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: "1rem"
                }}
            >
                Abrir Modal de Nueva Vivienda
            </button>

            <CreateViviendaModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </main>
    );
}
