import Layout from "../../components/Layout";
import { useMe } from "../../lib/hooks";

export default function Profile() {
    const { data: user, error, isLoading } = useMe();

    return (
        <Layout>
            <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
                <h1>Mi Perfil</h1>

                {isLoading && <p>Cargando perfil...</p>}

                {error && <p style={{ color: "red" }}>Error al cargar el perfil</p>}

                {user && (
                    <div>
                        <div style={{ marginBottom: "1rem" }}>
                            <strong>Email:</strong> {user.email || "No disponible"}
                        </div>
                        <div style={{ marginBottom: "1rem" }}>
                            <strong>Nombre:</strong> {user.name || "No disponible"}
                        </div>
                        <div style={{ marginBottom: "1rem" }}>
                            <strong>ID:</strong> {user.id || "No disponible"}
                        </div>
                    </div>
                )}

                {!user && !isLoading && !error && (
                    <p>No has iniciado sesión. Por favor, inicia sesión para ver tu perfil.</p>
                )}
            </div>
        </Layout>
    );
}
