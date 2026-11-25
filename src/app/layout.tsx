import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
    title: "CHAPIN Core | Impulsamos tu negocio",
    description: "Consultoría tecnológica, desarrollo web, sistemas a medida, aplicaciones móviles y ciberseguridad."
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <html lang="es"><body>{children}</body></html>;
}