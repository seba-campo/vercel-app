import { ReactNode } from 'react';
import * as S from './styles';

interface ProductGridProps {
    children: ReactNode;
    resultsCount?: number;
    totalCount?: number;
    onViewMore?: () => void;
}

export default function ProductGrid({ children, resultsCount, totalCount, onViewMore }: ProductGridProps) {
    return (
        <S.Container>
            {resultsCount !== undefined && totalCount !== undefined && (
                <S.ResultsText>
                    {resultsCount} resultados de {totalCount}
                </S.ResultsText>
            )}
            <S.Grid>
                {children}
            </S.Grid>
            {onViewMore && (
                <S.ViewMore onClick={onViewMore}>
                    ver más &gt;
                </S.ViewMore>
            )}
        </S.Container>
    );
}
