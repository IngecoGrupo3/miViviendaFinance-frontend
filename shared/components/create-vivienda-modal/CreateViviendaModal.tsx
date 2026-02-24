import { useState } from "react";
import { Modal } from "@/shared/components/modal";
import { Stepper } from "@/shared/components/stepper";
import { Input } from "@/shared/components/input";
import { Select } from "@/shared/components/select";
import { DragDropImage } from "@/shared/components/drag-drop-image";
import { Button } from "@/shared/components/button";
import { FiArrowRight } from "react-icons/fi";
import styles from "./CreateViviendaModal.module.css";

interface CreateViviendaModalProps {
    open: boolean;
    onClose: () => void;
}

export function CreateViviendaModal({ open, onClose }: CreateViviendaModalProps) {
    const [step, setStep] = useState<1 | 2>(1);

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(2);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submit nueva vivienda");
        onClose();
        setStep(1);
    };

    const title = step === 1 ? "Datos generales de la vivienda" : "Características";

    return (
        <Modal open={open} onClose={onClose} title={title} maxWidth="760px">
            <div className={styles.modalContent}>
                <form className={styles.formContainer} onSubmit={step === 1 ? handleNext : handleSubmit}>
                    <div style={{ display: step === 1 ? 'block' : 'none' }}>
                        <div className={styles.formRow}>
                            <label className={styles.label}>Proyecto inmobiliario</label>
                            <div className={styles.fieldFull}>
                                <Input id="proyecto" />
                            </div>
                        </div>

                        <div className={styles.formRow} style={{ marginTop: '1.5rem' }}>
                            <label className={styles.label}>Tipo de inmueble</label>
                            <div className={styles.fieldSplit}>
                                <Select id="tipo" />
                            </div>
                            <label className={styles.labelSub}>Departamento</label>
                            <div className={styles.fieldSplit}>
                                <Select id="departamento" />
                            </div>
                        </div>

                        <div className={styles.formRow} style={{ marginTop: '1.5rem' }}>
                            <label className={styles.label}>Provincia</label>
                            <div className={styles.fieldSplit}>
                                <Select id="provincia" />
                            </div>
                            <label className={styles.labelSub}>Distrito</label>
                            <div className={styles.fieldSplit}>
                                <Select id="distrito" />
                            </div>
                        </div>

                        <div className={styles.formRow} style={{ marginTop: '1.5rem' }}>
                            <label className={styles.label}>Dirección</label>
                            <div className={styles.fieldFull}>
                                <Input id="direccion" />
                            </div>
                        </div>

                        <div className={styles.uploadRow} style={{ marginTop: '2rem' }}>
                            <DragDropImage />
                        </div>

                        <Stepper steps={2} currentStep={1} onStepClick={(s) => setStep(s as 1 | 2)} />

                        <div className={styles.buttonWrapper}>
                            <Button type="submit" color="orange" weight="bold" icon={<FiArrowRight />} iconPosition="right">
                                SIGUIENTE
                            </Button>
                        </div>
                    </div>

                    <div style={{ display: step === 2 ? 'block' : 'none' }}>
                        <div className={styles.formRow}>
                            <label className={styles.label}>Área (m²)</label>
                            <div className={styles.fieldThird}>
                                <Input id="area" />
                            </div>
                            <label className={styles.labelSub}>Dormitorios</label>
                            <div className={styles.fieldThird}>
                                <Input id="dormitorios" />
                            </div>
                            <label className={styles.labelSub}>Baños</label>
                            <div className={styles.fieldThird}>
                                <Input id="banos" />
                            </div>
                        </div>

                        <div className={styles.formRow} style={{ marginTop: '1.5rem' }}>
                            <label className={styles.label}>Estacionamientos</label>
                            <div className={styles.fieldSplit}>
                                <Input id="estacionamientos" />
                            </div>
                            <label className={styles.labelSub}>Piso/Pisos</label>
                            <div className={styles.fieldSplit}>
                                <Input id="pisos" />
                            </div>
                        </div>

                        <div className={styles.formRow} style={{ marginTop: '1.5rem' }}>
                            <label className={styles.label}>Precio de venta</label>
                            <div className={styles.fieldSplitPrice}>
                                <span className={styles.pricePrefix}>S/</span>
                                <Input id="precioS" />
                            </div>
                            <div className={styles.fieldSplitPrice}>
                                <span className={styles.pricePrefix}>$</span>
                                <Input id="precioD" />
                            </div>
                        </div>

                        <div className={styles.formRow} style={{ marginTop: '1.5rem' }}>
                            <label className={styles.label}>Descripción</label>
                            <div className={styles.fieldFull}>
                                <Input id="descripcion" />
                            </div>
                        </div>

                        <Stepper steps={2} currentStep={2} onStepClick={(s) => setStep(s as 1 | 2)} />

                        <div className={styles.buttonWrapper}>
                            <Button type="submit" color="orange" weight="bold" icon={<FiArrowRight />} iconPosition="right">
                                CREAR VIVIENDA
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </Modal>
    );
}
