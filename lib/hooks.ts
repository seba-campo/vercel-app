import useSWR from "swr";
import { fetchAPI } from "./api";

export async function useMe(){
    const { data, error, isLoading } = useSWR("/auth", fetchAPI);
    return data;
}