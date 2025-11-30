import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Logout() {
    const router = useRouter();

    useEffect(() => {
        // TODO: Implementar lógica de logout
        // Por ejemplo: limpiar tokens, cookies, localStorage, etc.

        // Limpiar localStorage
        if (typeof window !== "undefined") {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            // Agregar cualquier otra limpieza necesaria
        }

        // Redirigir a la página de inicio
        router.push("/");
    }, [router]);

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
        }}>
            <p>Cerrando sesión...</p>
        </div>
    );
}
