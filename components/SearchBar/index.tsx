import { useState, FormEvent } from 'react';
import { SearchForm, SearchInput, SearchButton } from './styles';

interface SearchBarProps {
    onSearch?: (query: string) => void;
    placeholder?: string;
    variant?: 'primary' | 'secondary';
}

export default function SearchBar({ onSearch, placeholder = "Reloj", variant = 'primary' }: SearchBarProps) {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (onSearch && query.trim()) {
            onSearch(query.trim());
        }
    };

    return (
        <SearchForm onSubmit={handleSubmit} $variant={variant}>
            <SearchInput
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <SearchButton type="submit" $variant={variant}>
                Buscar
            </SearchButton>
        </SearchForm>
    );
}
