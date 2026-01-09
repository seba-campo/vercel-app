import { useEffect } from "react";
import { useRouter } from "next/router";
import { authTokenState } from "../../store/atoms";
import { useSetRecoilState } from "recoil";
import { userIdState } from "../../store/atoms";

export default function Logout() {
    const router = useRouter();
    const setAuthTokenState = useSetRecoilState(authTokenState);
    const setUserIdState = useSetRecoilState(userIdState);

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            setAuthTokenState(null);
            setUserIdState(null);
        }

        router.push("/");
    }, [router]);

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
        }}>
            <p>Cerrando sesión...</p>
        </div>
    );
}
