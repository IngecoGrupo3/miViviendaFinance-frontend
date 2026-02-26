"use client";

import { MainLayout } from "@/shared/components/main-layout/MainLayout";
import { Button } from "@/shared/components/button";
import { Select } from "@/shared/components/select";
import { useRouter, useParams } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";

export default function CalculadoraFinancieraPage() {
    const router = useRouter();
    const params = useParams();

    const id = params.id as string;

    const handleCalcular = () => {
        router.push(`/clientes/${id}/calculadora/resultados`);
    };

    return (
        <MainLayout>
            <div className={styles.container}>
                <h1 className={styles.pageTitle}>
                    <Link href="/clientes" className={styles.breadcrumbLink}>Clientes</Link>
                    {" > "}
                    <span>Calculadora Financiera</span>
                </h1>
                <hr className={styles.titleDivider} />

                <div className={styles.viviendaCard}>
                    <h3 className={styles.sectionTitleLink}>Vivienda seleccionada</h3>
                    <div className={styles.viviendaDetails}>
                        <span className={styles.viviendaName}>Departamento familiar con balcón #5</span>
                        <span className={styles.viviendaLocation}>San Miguel, Lima</span>
                        <span className={styles.viviendaArea}>Área: 90.74 m²</span>
                        <span className={styles.viviendaPrice}>Precio: S/. 220 000</span>
                    </div>
                </div>

                <div className={styles.sectionCard}>
                    <h3 className={styles.sectionTitle}>Datos del crédito</h3>

                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Aplica Bono Techo Propio</label>
                            <div className={styles.radioGroup}>
                                <label className={styles.radioLabel}><input type="radio" name="bono" defaultChecked className={styles.radioInput} /> Sí</label>
                                <label className={styles.radioLabel}><input type="radio" name="bono" className={styles.radioInput} /> No</label>
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Monto del bono</label>
                            <input type="text" className={styles.inputMini} />
                        </div>

                        <div className={styles.formGroup} style={{ marginLeft: "auto" }}>
                            <label className={styles.labelBold}>Precio con el bono</label>
                            <input type="text" className={`${styles.inputMini} ${styles.inputDisabled}`} disabled />
                        </div>
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Cuota inicial</label>
                            <div className={styles.radioGroup}>
                                <label className={styles.radioLabel}><input type="radio" name="cuota" defaultChecked className={styles.radioInput} /> Porcentaje</label>
                                <label className={styles.radioLabel}><input type="radio" name="cuota" className={styles.radioInput} /> Monto</label>
                            </div>
                            <input type="text" className={styles.inputMini} />
                        </div>

                        <div className={styles.formGroup} style={{ gap: "2rem" }}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Monto del préstamo</label>
                                <input type="text" className={`${styles.inputMini} ${styles.inputDisabled}`} disabled />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Plazo (meses)</label>
                                <input type="text" className={styles.inputMini} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.sectionCard}>
                    <h3 className={styles.sectionTitle}>Configuración del crédito</h3>

                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Tipo de tasa:</label>
                            <div className={styles.radioGroup}>
                                <label className={styles.radioLabel}><input type="radio" name="tasa" className={styles.radioInput} /> Nominal</label>
                                <label className={styles.radioLabel}><input type="radio" name="tasa" defaultChecked className={styles.radioInput} /> Efectiva</label>
                            </div>
                        </div>

                        <div className={styles.formGroup} style={{ marginLeft: "5rem" }}>
                            <label className={styles.label}>Tasa %</label>
                            <input type="text" className={styles.inputMini} />
                        </div>

                        <div className={styles.formGroup} style={{ marginLeft: "auto" }}>
                            <label className={styles.label}>Capitalización</label>
                            <Select id="capitalizacion" style={{ width: "160px", padding: "0.25rem 0.5rem", minHeight: "32px", height: "32px", fontSize: "0.9rem" }}>
                                <option>Diaria</option>
                                <option>Mensual</option>
                            </Select>
                        </div>
                    </div>
                </div>

                <div className={styles.sectionCard}>
                    <h3 className={styles.sectionTitle}>Periodo de gracia</h3>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Tipo de gracia:</label>
                            <div className={styles.radioGroup}>
                                <label className={styles.radioLabel}><input type="radio" name="gracia" className={styles.radioInput} /> Sin gracia</label>
                                <label className={styles.radioLabel}><input type="radio" name="gracia" defaultChecked className={styles.radioInput} /> Gracia parcial</label>
                                <label className={styles.radioLabel}><input type="radio" name="gracia" className={styles.radioInput} /> Gracia total</label>
                            </div>
                        </div>
                        <div className={styles.formGroup} style={{ marginLeft: "auto" }}>
                            <label className={styles.label}>Meses de gracia:</label>
                            <input type="text" className={styles.inputMini} />
                        </div>
                    </div>
                </div>

                <div className={styles.sectionCard}>
                    <h3 className={styles.sectionTitle}>Parámetros de evaluación financiera</h3>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Tasa de descuento (COK) %</label>
                            <input type="text" className={styles.inputMini} />
                        </div>
                    </div>
                </div>

                <div className={styles.footerActions}>
                    <Button color="orange" weight="bold" onClick={handleCalcular} style={{ padding: "1rem 4rem" }}>
                        CALCULAR CRÉDITO
                    </Button>
                </div>

            </div>
        </MainLayout>
    );
}
