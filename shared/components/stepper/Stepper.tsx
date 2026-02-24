import styles from "./Stepper.module.css";

export interface StepperProps {
    steps: number;
    currentStep: number;
    onStepClick?: (step: number) => void;
}

export function Stepper({ steps, currentStep, onStepClick }: StepperProps) {
    return (
        <div className={styles.container}>
            <div className={styles.line}></div>
            <div className={styles.stepsWrapper}>
                {Array.from({ length: steps }).map((_, i) => {
                    const stepNum = i + 1;
                    const isActive = stepNum === currentStep;
                    return (
                        <div
                            key={stepNum}
                            className={`${styles.circle} ${isActive ? styles.active : styles.inactive}`}
                            onClick={() => onStepClick?.(stepNum)}
                            style={{ cursor: onStepClick ? 'pointer' : 'default' }}
                        >
                            {stepNum}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
