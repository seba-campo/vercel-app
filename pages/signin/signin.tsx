import { useState } from "react";
import Layout from "../../components/Layout";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implementar lógica de login
        console.log("Login attempt:", { email, password });
    };

    return (
        <Layout>
            <div style={{ maxWidth: "400px", margin: "0 auto", padding: "2rem" }}>
                <h1>Iniciar Sesión</h1>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "1rem" }}>
                        <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem" }}>
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ width: "100%", padding: "0.5rem" }}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: "1rem" }}>
                        <label htmlFor="password" style={{ display: "block", marginBottom: "0.5rem" }}>
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ width: "100%", padding: "0.5rem" }}
                            required
                        />
                    </div>
                    <button type="submit" style={{ padding: "0.5rem 1rem" }}>
                        Ingresar
                    </button>
                </form>
            </div>
        </Layout>
    );
}
