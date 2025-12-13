import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "../../components";
import { FormWrapper } from "./signInStyles";
import { useMutation } from "@tanstack/react-query";
import { formatAndValidateEmail } from "../../utils/validateEmail";
import Layout from "../../components/Layout";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [isVerifyCode, setIsVerifyCode] = useState(false);
    const router = useRouter();

    const {
        mutate: mutateLogin,
        isPending,
        error,
        data: dataLogin
    } = useMutation({
        mutationFn: (email: string) => {
            const formattedEmail = formatAndValidateEmail(email);
            if (!formattedEmail) return;
            return fetch("/api/auth", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            }).then((res) => res.json());
        },
        onSuccess: (dataLogin) => {
            console.log("Auth success:", dataLogin);
            setIsVerifyCode(true);
        },
        onError: (error) => {
            alert(error);
        }
    });

    const {
        mutate: mutateVerifyCode,
        isPending: isPendingVerifyCode,
        error: errorVerifyCode,
        data: dataVerifyCode,
        status
    } = useMutation({
        mutationFn: async (code: string) => {
            const res = await fetch("/api/auth/token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    code: parseInt(code) // Asegurar que el código sea un número si el backend lo espera así, o string según corresponda
                }),
            });

            if (!res.ok) {
                throw new Error('Error verifying code');
            }

            return res.json();
        },
        onSuccess: (dataVerifyCode) => {
            console.log("Verify success:", dataVerifyCode);
            setIsVerifyCode(false);
            router.push("/");
        },
        onError: (errorVerifyCode) => {
            alert(errorVerifyCode);
            setIsVerifyCode(false);
            setEmail("");
            setCode("");
        }
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutateLogin(email);
    };

    const handleVerifyCode = (e: React.FormEvent) => {
        e.preventDefault();
        mutateVerifyCode(code);
    };



    return (
        <Layout>
            <div style={{ maxWidth: "400px", margin: "0 auto", padding: "2rem" }}>
                {!isVerifyCode ? (
                    <FormWrapper>
                        <h1>Ingresar</h1>
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
                                    required
                                />
                            </div>
                            <Button
                                type="submit"
                                variant="secondary"
                                style={{ width: "100%" }}
                                onClick={handleSubmit}
                                isLoading={isPending}
                            >
                                Ingresar
                            </Button>
                        </form>
                    </FormWrapper>
                ) :
                    (
                        <FormWrapper>
                            <h1>Codigo</h1>
                            <form onSubmit={handleSubmit}>
                                <div style={{ marginBottom: "1rem" }}>
                                    <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem" }}>
                                        Enviamos el código a tu email
                                    </label>
                                    <input
                                        type="code"
                                        id="code"
                                        value={code}
                                        onChange={(e) => setCode(e.target.value)}
                                        required
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    variant="secondary"
                                    style={{ width: "100%" }}
                                    onClick={handleVerifyCode}
                                    isLoading={isPending}
                                >
                                    Ingresar
                                </Button>
                            </form>
                        </FormWrapper>
                    )}
            </div>
        </Layout>
    );
}
