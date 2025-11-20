import { useState, FormEvent } from 'react';
import * as S from './styles';

interface SearchBarProps {
    onSearch?: (query: string) => void;
    placeholder?: string;
}

export default function SearchBar({ onSearch, placeholder = "Reloj" }: SearchBarProps) {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (onSearch && query.trim()) {
            onSearch(query.trim());
        }
    };

    return (
        <S.SearchForm onSubmit={handleSubmit}>
            <S.SearchInput
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <S.SearchButton type="submit">
                Buscar
            </S.SearchButton>
        </S.SearchForm>
    );
}
