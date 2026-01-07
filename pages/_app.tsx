import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { RecoilRoot, RecoilEnv } from 'recoil';
import { QueryProvider } from '../lib/QueryProvider';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

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


