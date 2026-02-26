"use client";

import { MainLayout } from "@/shared/components/main-layout/MainLayout";
import { Button } from "@/shared/components/button";
import { Table, Column } from "@/shared/components/table/Table";
import { useParams } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";

type Amortizacion = {
    id: string;
    numero: string;
    cuota: string;
    interes: string;
    amortizacion: string;
    saldo: string;
};

const mockData: Amortizacion[] = [
    { id: "1", numero: "1", cuota: "1,480", interes: "1,100", amortizacion: "380", saldo: "156,308" },
    { id: "2", numero: "2", cuota: "1,480", interes: "1,095", amortizacion: "385", saldo: "155,923" },
    { id: "3", numero: "X", cuota: "XXXXX", interes: "XXXXX", amortizacion: "XXXX", saldo: "XXXXXX" },
];

export default function ResultadosPage() {
    const params = useParams();
    const id = params.id as string;

    const columns: Column<Amortizacion>[] = [
        { key: "numero", header: "#", align: "center", width: "10%" },
        { key: "cuota", header: "Cuota", align: "center", width: "20%" },
        { key: "interes", header: "Interés", align: "center", width: "20%" },
        { key: "amortizacion", header: "Amortización", align: "center", width: "20%" },
        { key: "saldo", header: "Saldo", align: "center", width: "20%" },
    ];

    return (
        <MainLayout>
            <div className={styles.container}>
                <h1 className={styles.pageTitle}>
                    <Link href="/clientes" className={styles.breadcrumbLink}>Clientes</Link>
                    {" > "}
                    <Link href={`/clientes/${id}/calculadora`} className={styles.breadcrumbLink}>Calculadora Financiera</Link>
                    {" > "}
                    <span>Resultados</span>
                </h1>
                <hr className={styles.titleDivider} />

                <div className={styles.topSection}>
                    <div className={`${styles.card} ${styles.resumenCard}`}>
                        <h3 className={styles.cardTitle}>Resumen del crédito</h3>
                        <div className={styles.resumenGrid}>
                            <div>Precio de la vivienda: <span>S/ 220,000</span></div>
                            <div>Monto financiado: <span>S/ 156,688</span></div>
                            <div>Bono Techo Propio: <span>S/ 43,312</span></div>
                            <div>Plazo: <span>240 meses</span></div>
                            <div>Precio con bono: <span>S/ 176,688</span></div>
                            <div>Tipo de tasa: <span>Efectiva</span></div>
                            <div>Cuota inicial: <span>10%</span></div>
                            <div>Periodo de gracia: <span>Parcial (6 meses)</span></div>
                        </div>
                    </div>

                    <div className={styles.rightCards}>
                        <div className={`${styles.card} ${styles.resultadosCard}`}>
                            <h3 className={styles.cardTitle}>Resultados del crédito</h3>
                            <div className={styles.resultadosRow}>
                                <div className={styles.resultadoPrincipal}>
                                    Cuota mensual final: <span>S/ 1,480.25</span>
                                </div>
                                <div className={styles.resultadoSecundario}>
                                    Monto total a pagar: <span>S/ 355,260.00</span>
                                </div>
                            </div>
                            <div className={styles.resultadoIntereses}>
                                Total de intereses: <span>S/ 198,572.00</span>
                            </div>
                        </div>

                        <div className={`${styles.card} ${styles.indicadoresCard}`}>
                            <h3 className={styles.cardTitle}>Indicadores financieros</h3>
                            <div className={styles.indicadoresGrid}>
                                <div>TCEA: <span>8.92 %</span></div>
                                <div>VAN: <span>S/ 32,450.10</span></div>
                                <div>TIR: <span>9.85 %</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.card} ${styles.amortizacionCard}`}>
                    <h3 className={styles.cardTitle}>Detalle de amortización</h3>
                    <div style={{ marginTop: "1rem" }}>
                        <Table data={mockData} columns={columns} variant="purple" />
                    </div>
                </div>

                <div className={styles.footerActions}>
                    <Button color="orange" weight="bold" style={{ padding: "1rem 3rem" }}>
                        Guardar simulación
                    </Button>
                    <Button color="soft" weight="bold" style={{ padding: "1rem 3rem", backgroundColor: "#9183FF" }}>
                        Exportar a Excel
                    </Button>
                </div>

            </div>
        </MainLayout>
    );
}
