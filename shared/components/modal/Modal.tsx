import type { ReactNode } from "react";
import { FiX } from "react-icons/fi";
import styles from "./Modal.module.css";

export type ModalProps = {
  title: string;
  onClose: () => void;
  children?: ReactNode;
  footer?: ReactNode;
  open: boolean;
  maxWidth?: string;
};

export function Modal({ title, onClose, children, footer, open, maxWidth = "32rem" }: ModalProps) {
  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className={styles.dialog} style={{ maxWidth }} onClick={(e) => e.stopPropagation()}>
        <header className={styles.header}>
          <h2 id="modal-title" className={styles.title}>
            {title}
          </h2>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Cerrar"
          >
            <FiX size={22} strokeWidth={2.5} />
          </button>
        </header>

        <div className={styles.body}>
          {children}
        </div>

        {footer != null && (
          <footer className={styles.footer}>
            {footer}
          </footer>
        )}
      </div>
    </div>
  );
}
