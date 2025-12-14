
import { Button } from "../../components";
import { FormWrapper } from "./signInStyles";
import Layout from "../../components/Layout";
import { useSignIn } from "./useSignIn";

export default function SignIn() {

    const {
        code,
        email,
        isVerifyCode,
        isPending,
        setCode,
        setEmail,
        handleSubmit,
        handleVerifyCode,
    } = useSignIn()

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
