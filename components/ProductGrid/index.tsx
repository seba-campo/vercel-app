import { ReactNode } from 'react';
import { Container, ResultsText, Grid, ViewMore } from './styles';

interface ProductGridProps {
    children: ReactNode;
    resultsCount?: number;
    totalCount?: number;
    onViewMore?: () => void;
}

export default function ProductGrid({ children, resultsCount, totalCount, onViewMore }: ProductGridProps) {
    return (
        <Container>
            {resultsCount !== undefined && totalCount !== undefined && (
                <ResultsText>
                    {resultsCount} resultados de {totalCount}
                </ResultsText>
            )}
            <Grid>
                {children}
            </Grid>
            {onViewMore && (
                <ViewMore onClick={onViewMore}>
                    ver más &gt;
                </ViewMore>
            )}
        </Container>
    );
}
