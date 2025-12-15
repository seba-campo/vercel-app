import { Button } from "../../components";
import Layout from "../../components/Layout";
import { ProfileWrapper } from "./profileStyles";
import { useProfile } from "./useProfile";



export default function Profile() {
    const { userData } = useProfile();

    return (
        <Layout>
            <ProfileWrapper>
                <div className="title">
                    <h1>Perfil</h1>
                </div>
                <div className="profile">
                    <form onSubmit={() => { }}>
                        <div style={{ marginBottom: "1rem" }}>
                            <label htmlFor="email" style={{ display: "block", marginBottom: "25px" }}>
                                Nombre completo
                                <input
                                    type="email"
                                    id="email"
                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </label>

                            <label htmlFor="email" style={{ display: "block", marginBottom: "25px" }}>
                                Direccion
                                <input
                                    type="email"
                                    id="email"
                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </label>

                            <label htmlFor="email" style={{ display: "block", marginBottom: "25px" }}>
                                Email
                                <input
                                    type="email"
                                    id="email"
                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </label>
                        </div>
                        <Button
                            type="submit"
                            variant="secondary"
                            style={{ width: "100%" }}
                        // onClick={handleSubmit}
                        // isLoading={isPending}
                        >
                            Ingresar
                        </Button>
                    </form>
                </div>
            </ProfileWrapper>
        </Layout>
    );
}
