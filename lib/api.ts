export async function fetchAPI(path: string, headers: Headers){
    const defaultURL = "http://localhost:3000/api";
    var response: string;
    if(!path) return; 

    const tokenStored = localStorage.getItem("accessToken");

    const res = await fetch(defaultURL + path, {
        headers: {
        "Content-Type": "application/json",
        "Authorization": tokenStored || "",
        },
    });

    if (!res.ok) {
        throw new Error("Error al intentar contactarse con la API");
    }

    return await res.json();
}