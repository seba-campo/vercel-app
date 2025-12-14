import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import { QueryProvider } from '../lib/QueryProvider';

export default function App({ Component, pageProps }: AppProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <RecoilRoot>
            <QueryProvider>
                <Component {...pageProps} />
            </QueryProvider>
        </RecoilRoot>
    );
}


