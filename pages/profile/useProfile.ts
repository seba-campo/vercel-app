import { useEffect, useState } from "react";
import { authTokenState } from "../../store/atoms";
import { useRecoilValue } from "recoil";

export interface IUserData {
    nombre: string,
    email: string,
    apellido: string,
    address: string,
    id: string
}

export function useProfile() {
    const token = useRecoilValue(authTokenState);
    const [userData, setUserData] = useState<IUserData | null>(null)

    useEffect(() => {
        //Se podría implementar aca un reactQuery, para tener el isLoading, pero se opta por fetch por la facilidad.
        const getUserInfo = async () => {
            const data = await fetch('/api/me', {
                headers: {
                    Authorization: token
                }
            }).then((res) => res.json());

            setUserData({
                nombre: data?.nombre || '-',
                email: data?.email || '-',
                apellido: data?.apellido || '-',
                address: data?.address || '-',
                id: data?.id || '-'
            });
        }

        getUserInfo();
    }, [token]);

    return {
        userData,
        setUserData
    }
}