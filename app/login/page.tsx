import { AuthLayout } from "@/shared/components/auth-layout";
import { Input } from "@/shared/components/input";
import { Button } from "@/shared/components/button";
import styles from "./login.module.css";

export default function LoginPage() {
    return (
        <AuthLayout>
            <div className={styles.formContainer}>
                <h1 className={styles.title}>Iniciar sesión</h1>
                <form className={styles.form}>
                    <Input id="email" label="Correo Electrónico" type="email" placeholder="correo@dominio.com" />
                    <Input id="password" label="Contraseña" type="password" placeholder="*************" />
                    <div className={styles.buttonWrapper}>
                        <Button color="purple" weight="bold" type="submit">
                            Iniciar sesión
                        </Button>
                    </div>
                </form>
            </div>
        </AuthLayout>
    );
}
