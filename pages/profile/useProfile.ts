import { useEffect, useState } from "react";
import { authTokenState } from "../../store/atoms";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/router";

export interface IUserData {
    nombre: string,
    email: string,
    apellido: string,
    address: string,
    id: string
}

const useProfile = () => {
    const token = useRecoilValue(authTokenState);
    const [userData, setUserData] = useState<IUserData | null>(null);
    const [newAddress, setNewAddress] = useState('');
    const router = useRouter();

    useEffect(() => {
        //Se podría implementar aca un reactQuery, para tener el isLoading, pero se opta por fetch por la facilidad.
        const getUserInfo = async () => {
            const data = await fetch('/api/me', {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).then((res) => {
                if (res.status === 401) {
                    router.push('/signin');
                    localStorage.removeItem('vapp-token');
                    console.log("Sesión vencida");
                }
                return res.json();
            });
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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!newAddress) return;
        const newUserData: IUserData = await fetch('/api/me', {
            method: 'PATCH',
            headers: {
                Authorization: 'Bearer ' + token
            },
            body: JSON.stringify({
                address: newAddress,
                email: userData?.email
            })
        }).then((res) => {
            return res.json();
        });

        if (!newUserData) return;
        setUserData(newUserData);
    }

    return {
        userData,
        setUserData,
        setNewAddress,
        handleSubmit
    }
}

export default useProfile