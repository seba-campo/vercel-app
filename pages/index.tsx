import { useState } from "react";
import Layout from "../components/layout"
import { useMe } from "../lib/hooks"


export default function App(){
    const me = useMe();
    const [token, setToken] = useState('');
    async function onHandleButton() {
        setToken(await me)
    }
    return (
        <Layout>
            <div>Soy la main page</div>
            <button onClick={onHandleButton}>Get info</button>
            <div>
                {token ?? <p>{token}</p>}
            </div>
        </Layout>
    )
}