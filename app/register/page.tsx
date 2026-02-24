"use client";

import { useState } from "react";
import { AuthLayout } from "@/shared/components/auth-layout";
import { Input } from "@/shared/components/input";
import { Button } from "@/shared/components/button";
import { Stepper } from "@/shared/components/stepper";
import styles from "./register.module.css";

export default function RegisterPage() {
    const [step, setStep] = useState<1 | 2>(1);

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(2);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submit account creation");
    };

    return (
        <AuthLayout>
            <div className={styles.formContainer}>
                <h1 className={styles.title}>Crear cuenta</h1>

                <Stepper steps={2} currentStep={step} />

                {step === 1 ? (
                    <form className={styles.form} onSubmit={handleNext}>
                        <Input id="name" label="Nombre Completo" />
                        <Input id="docId" label="Documento de Identidad" />
                        <Input id="email" label="Correo Electrónico" type="email" />

                        <div className={styles.buttonWrapper}>
                            <Button color="orange" weight="bold" type="submit">
                                Continuar
                            </Button>
                        </div>
                    </form>
                ) : (
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <Input id="phone" label="Celular" type="tel" />
                        <Input id="password" label="Contraseña" type="password" />
                        <Input id="confirmPassword" label="Confirmar contraseña" type="password" />

                        <div className={styles.buttonWrapper}>
                            <Button color="orange" weight="bold" type="submit">
                                Crear cuenta
                            </Button>
                        </div>
                    </form>
                )}
            </div>
        </AuthLayout>
    );
}
