export async function fetchAPI(path: string, headers: Headers){
    const defaultURL = "http://localhost:3000/api";
    var response;
    if(!path) return; 

    const tokenStored = localStorage.getItem("accessToken");

    fetch(defaultURL+path, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': tokenStored
        }
    }).then((res)=>{
        if(res.status != 200){
            throw "Ocurrió un error al intentar contactarse con la api."
        }
        else{
            return res.json();
        }
    }).then((data)=>{
        response = data
    })
    return response;
}