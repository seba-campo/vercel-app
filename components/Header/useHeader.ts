import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function useHeader() {
    const [isLogged, setIsLogged] = useState(false);
    const router = useRouter();

    const onSearch = () => {
        console.log('search')
    }

    const onSearchClick = () => {
        console.log('search click')
    }

    const onLoginClick = () => {
        router.push('/signin');
    }

    const onProfileClick = () => {
        console.log('profile click')
    }

    const onCloseSessionClick = () => {
        if (!isLogged) return;

        // TBD
        localStorage.removeItem('isLogged');
        setIsLogged(false);
    }

    useEffect(() => {
        // TBD
        const isLoggedValue = localStorage.getItem('isLogged');
        setIsLogged(isLoggedValue === 'true');
    }, []);

    return {
        isLogged,
        onSearch,
        onSearchClick,
        onLoginClick,
        onProfileClick,
        onCloseSessionClick
    }
}
