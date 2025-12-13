import { selector, useRecoilState } from "recoil";
import { isLoggedState, userDataState } from "./atoms";

const sessionState = selector({
    key: "SessionState",
    get: async ({get}) => {
        const isUserLogged = get(isLoggedState);
        const [user, setUser]= useRecoilState(userDataState)

        if(isUserLogged){
            const userData = await fetch(process.env.MAIN_API_URL+'/me', {
                headers: {
                    'Authorization': localStorage.getItem('vapp-token')
                }
            })
            .then((res) => { return res.json() })
            .then((data) => { return data });

            const { email, nombre, apellido, address } = userData;
            setUser({email, nombre, apellido, address});
        }else{
            return user;
        }
    }
})