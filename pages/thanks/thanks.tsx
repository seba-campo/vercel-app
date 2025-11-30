import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function Thanks() {
    const router = useRouter();

    return (
        <Layout>
            <div style={{
                maxWidth: "600px",
                margin: "0 auto",
                padding: "2rem",
                textAlign: "center"
            }}>
                <h1 style={{ color: "#0070f3", marginBottom: "1rem" }}>
                    ¡Gracias por tu compra!
                </h1>

                <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
                    Tu pedido ha sido procesado exitosamente.
                </p>

                <div style={{
                    backgroundColor: "#f0f0f0",
                    padding: "1.5rem",
                    borderRadius: "8px",
                    marginBottom: "2rem"
                }}>
                    <p style={{ marginBottom: "0.5rem" }}>
                        Recibirás un email de confirmación con los detalles de tu pedido.
                    </p>
                    <p>
                        El tiempo estimado de entrega es de 3-5 días hábiles.
                    </p>
                </div>

                <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
                    <button
                        onClick={() => router.push("/")}
                        style={{
                            padding: "0.75rem 1.5rem",
                            fontSize: "1rem",
                            backgroundColor: "#0070f3",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer"
                        }}
                    >
                        Volver al Inicio
                    </button>

                    <button
                        onClick={() => router.push("/profile")}
                        style={{
                            padding: "0.75rem 1.5rem",
                            fontSize: "1rem",
                            backgroundColor: "white",
                            color: "#0070f3",
                            border: "2px solid #0070f3",
                            borderRadius: "4px",
                            cursor: "pointer"
                        }}
                    >
                        Ver Mi Perfil
                    </button>
                </div>
            </div>
        </Layout>
    );
}
