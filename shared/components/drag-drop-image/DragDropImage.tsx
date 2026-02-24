import styles from "./DragDropImage.module.css";
import { FiCamera } from "react-icons/fi";

export function DragDropImage() {
    return (
        <div className={styles.container}>
            <div className={styles.iconWrapper}>
                <FiCamera size={24} />
            </div>
            <p className={styles.text}>Arrasta y suelta una imagen, o haz click para subir</p>
        </div>
    );
}
