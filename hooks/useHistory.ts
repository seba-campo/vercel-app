import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../store/selectors";

export function useOrders() {
    const user = useRecoilValue(userState);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user?.id) {
            fetch("/api/me/orders?userId=" + user.id)
                .then(res => res.json())
                .then(data => {
                    setOrders(data || []);
                })
        }
    }, [user]);

    return orders;
}
