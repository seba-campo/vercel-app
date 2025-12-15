import useSWR from "swr";
import { fetchAPI } from "./api";



export function useProduct(id: string){
    const pathFixed = "/products/"+id;
    const {data, error, isLoading} = useSWR(pathFixed, fetchAPI);
    return  { data, error, isLoading };
}