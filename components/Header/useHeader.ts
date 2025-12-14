import { useRecoilValue, useRecoilState } from "recoil";
import { isLoggedState } from "../../store/selectors";
import { authTokenState } from "../../store/atoms";
import { useRouter } from "next/router";

export default function useHeader() {
    const isLogged = useRecoilValue(isLoggedState);
    const [, setAuthToken ] = useRecoilState(authTokenState)
    const router = useRouter();

    const onSearch = () => {
        console.log('search')
    }

    const onSearchClick = () => {
        console.log('search click')
    }

    const onLoginClick = () => {
        if(isLogged){
            router.push('/profile');
        }else{
            router.push('/profile');
        }
    }

    const onProfileClick = () => {
        console.log('profile click')
    }

    const onCloseSessionClick = () => {
        if (!isLogged) return;

        // TBD
        localStorage.removeItem('vapp-token');
        setAuthToken(null);
    }

    return {
        isLogged,
        onSearch,
        onSearchClick,
        onLoginClick,
        onProfileClick,
        onCloseSessionClick
    }
}
