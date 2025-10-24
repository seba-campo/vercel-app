import { useState } from "react";
import Layout from "../components/layout"
import { useMe } from "../lib/hooks"


export default function App() {
  const { data, error, isLoading } = useMe();
  const [token, setToken] = useState('');

  async function onHandleButton() {
    if (data) {
      setToken(data.id);
      console.log(data) 
    }
  }

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error al cargar</div>;

  return (
    <Layout>
      <div>Soy la main page</div>
      <button onClick={onHandleButton}>Get info</button>
      <div>Este es el ID del user {token}</div>
    </Layout>
  );
}