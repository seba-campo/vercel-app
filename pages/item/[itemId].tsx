import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function ItemDetail() {
    const router = useRouter();
    const { itemId } = router.query;

    // TODO: Fetch product data using itemId
    // const { data: product, error, isLoading } = useProduct(itemId);

    return (
        <Layout>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
                <h1>Detalle del Producto</h1>

                <div style={{ marginBottom: "2rem" }}>
                    <p><strong>ID del Producto:</strong> {itemId}</p>
                </div>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "2rem",
                    marginTop: "2rem"
                }}>
                    <div style={{
                        backgroundColor: "#f0f0f0",
                        height: "400px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <p>Imagen del producto</p>
                    </div>

                    <div>
                        <h2>Nombre del Producto</h2>
                        <p style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "1rem 0" }}>
                            $XX,XXX
                        </p>
                        <p style={{ marginBottom: "1rem" }}>
                            Descripción del producto aquí...
                        </p>

                        <button
                            onClick={() => router.push(`/checkout/${itemId}`)}
                            style={{
                                padding: "1rem 2rem",
                                fontSize: "1rem",
                                backgroundColor: "#0070f3",
                                color: "white",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer"
                            }}
                        >
                            Comprar Ahora
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
