import { useState } from 'react';
import Loader from '../Loader';

export function useLoader() {
    const [isLoading, setIsLoading] = useState(false);

    const withLoader = async <T,>(fn: () => Promise<T>): Promise<T> => {
        setIsLoading(true);
        try {
            const result = await fn();
            return result;
        } finally {
            setIsLoading(false);
        }
    };

    const LoaderComponent = ({ fullScreen = false, text = "Cargando..." }) =>
        isLoading ? <Loader fullScreen={fullScreen} text={text} /> : null;

    return { isLoading, withLoader, LoaderComponent };
}
