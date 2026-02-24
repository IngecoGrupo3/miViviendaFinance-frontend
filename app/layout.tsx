import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./global.css";

export const metadata: Metadata = {
    title: "Mi Vivienda Finance",
    description: "Hello world inicial",
};

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-primary",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
    <html lang="es" className={montserrat.variable}>
        <body>{children}</body>
    </html>
    );
}