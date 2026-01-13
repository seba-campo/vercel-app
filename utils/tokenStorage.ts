/**
 * Retorna true o false, según exista o no un token de acceso de la aplicación
 */
export function doesExistTokenInStorage(): boolean{
    const lsToken = localStorage.getItem('vapp-token');
    return lsToken ? true : false;
}

/**
 * 
 * @param newToken recibe el nuevo token a formatear para guardar en el storage
 */
export function formatSetNewToken(newToken: string): void{
    localStorage.setItem('vapp-token', `Bearer ${newToken}`);
}