import { Button } from "../../components";
import Layout from "../../components/Layout";
import ProfileWrapper from "./profileStyles";
import useProfile from "./useProfile";



export default function Profile() {
    const {
        userData,
        setNewAddress,
        handleSubmit
    } = useProfile();

    return (
        <Layout>
            <ProfileWrapper>
                <div className="title">
                    <h1>Perfil</h1>
                </div>
                <div className="profile">
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: "1rem" }}>
                            <label htmlFor="nombre" style={{ display: "block", marginBottom: "25px" }}>
                                Nombre completo
                                <input
                                    type="nombre"
                                    id="nombre"
                                    value={userData?.nombre}
                                    disabled={true}
                                    required
                                />
                            </label>

                            <label htmlFor="address" style={{ display: "block", marginBottom: "25px" }}>
                                Direccion
                                <input
                                    type="address"
                                    id="address"
                                    placeholder={userData?.address}
                                    onChange={(e) => setNewAddress(e.target.value)}
                                    required
                                />
                            </label>

                            <label htmlFor="email" style={{ display: "block", marginBottom: "25px" }}>
                                Email
                                <input
                                    type="email"
                                    id="email"
                                    value={userData?.email}
                                    disabled={true}
                                    required
                                />
                            </label>
                        </div>
                        <Button
                            type="submit"
                            variant="secondary"
                            style={{ width: "100%" }}
                        >
                            Ingresar
                        </Button>
                    </form>
                </div>
            </ProfileWrapper>
        </Layout>
    );
}
