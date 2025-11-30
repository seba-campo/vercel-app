import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function Search() {
    const router = useRouter();
    const { q } = router.query;

    return (
        <Layout>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
                <h1>Búsqueda de Productos</h1>

                {q ? (
                    <div>
                        <p style={{ marginBottom: "2rem" }}>
                            Resultados para: <strong>{q}</strong>
                        </p>

                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                            gap: "1rem"
                        }}>
                            {/* TODO: Implementar búsqueda real de productos */}
                            <p>No se encontraron productos. Implementar búsqueda con Algolia.</p>
                        </div>
                    </div>
                ) : (
                    <p>Ingresa un término de búsqueda para ver resultados.</p>
                )}
            </div>
        </Layout>
    );
}
