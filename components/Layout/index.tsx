import { ReactNode } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Loader from '../Loader';
import { useIsClient } from '../ClientOnly';
import { LayoutContainer, Main } from './styles';

interface LayoutProps {
    children: ReactNode;
    onLoginClick?: () => void;
    showLoader?: boolean;
}

export default function Layout({ children, showLoader = false }: LayoutProps) {
    const isClient = useIsClient();

    return (
        <LayoutContainer>
            <Header />
            <Main>
                {/* En CSR no usamos Suspense, solo mostramos el loader si showLoader es true */}
                {!isClient && showLoader ? (
                    <Loader text="Cargando..." />
                ) : (
                    children
                )}
            </Main>
            <Footer />
        </LayoutContainer>
    );
}
