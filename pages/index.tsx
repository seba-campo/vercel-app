import { useState } from "react";
import Layout from "../components/layout"
import { useMe } from "../lib/hooks"


export default function App(){
    const userData = useMe();
    const [token, setToken] = useState('');
    async function onHandleButton() {
        var newUserData = await userData;
        console.log(newUserData)
    }
    return (
        <Layout>
            <div>Soy la main page</div>
            <button onClick={onHandleButton}>Get info</button>
            <div>
                {token}
            </div>
        </Layout>
    )
}