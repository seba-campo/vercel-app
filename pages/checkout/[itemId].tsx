import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function Checkout() {
    const router = useRouter();
    const { itemId } = router.query;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        cardNumber: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implementar lógica de pago con MercadoPago
        console.log("Processing payment for item:", itemId, formData);

        // Redirigir a página de agradecimiento
        router.push("/thanks");
    };

    return (
        <Layout>
            <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
                <h1>Checkout</h1>

                <div style={{ marginBottom: "2rem" }}>
                    <p><strong>Producto ID:</strong> {itemId}</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "1rem" }}>
                        <label htmlFor="name" style={{ display: "block", marginBottom: "0.5rem" }}>
                            Nombre Completo
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            style={{ width: "100%", padding: "0.5rem" }}
                            required
                        />
                    </div>

                    <div style={{ marginBottom: "1rem" }}>
                        <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem" }}>
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            style={{ width: "100%", padding: "0.5rem" }}
                            required
                        />
                    </div>

                    <div style={{ marginBottom: "1rem" }}>
                        <label htmlFor="address" style={{ display: "block", marginBottom: "0.5rem" }}>
                            Dirección de Envío
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            style={{ width: "100%", padding: "0.5rem" }}
                            required
                        />
                    </div>

                    <div style={{ marginBottom: "1rem" }}>
                        <label htmlFor="cardNumber" style={{ display: "block", marginBottom: "0.5rem" }}>
                            Número de Tarjeta
                        </label>
                        <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            style={{ width: "100%", padding: "0.5rem" }}
                            placeholder="XXXX XXXX XXXX XXXX"
                            required
                        />
                    </div>

                    <button
                        type="submit"
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
                        Pagar Ahora
                    </button>
                </form>
            </div>
        </Layout>
    );
}
