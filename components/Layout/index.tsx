import { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Loader from '../Loader';
import { useIsClient } from '../ClientOnly';
import * as S from './styles';

interface LayoutProps {
    children: ReactNode;
    onSearch?: (query: string) => void;
    onLoginClick?: () => void;
    showLoader?: boolean;
}

export default function Layout({ children, onSearch, onLoginClick, showLoader = false }: LayoutProps) {
    const isClient = useIsClient();

    return (
        <S.LayoutContainer>
            <Header onSearch={onSearch} onLoginClick={onLoginClick} />
            <S.Main>
                {/* En CSR no usamos Suspense, solo mostramos el loader si showLoader es true */}
                {!isClient && showLoader ? (
                    <Loader text="Cargando..." />
                ) : (
                    children
                )}
            </S.Main>
            <Footer />
        </S.LayoutContainer>
    );
}
