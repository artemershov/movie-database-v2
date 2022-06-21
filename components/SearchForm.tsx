import { useState } from 'react';

interface SearchFormProps {
    onSubmit: (value: string) => void;
}

const SearchForm = ({ onSubmit }: SearchFormProps) => {
    const [query, setQuery] = useState('');

    const handleChange = (event: React.FormEvent<HTMLInputElement>) =>
        setQuery(event.currentTarget.value);

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        onSubmit(query);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="searchInput"
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search..."
                required
            />
            <small>Enter search query and press enter</small>

            <style jsx>
                {`
                    .searchInput {
                        width: 100%;
                        height: 40px;
                        border: 1px solid lightgray;
                        border-radius: 4px;
                        padding: 10px;
                        margin-bottom: 5px;
                    }
                `}
            </style>
        </form>
    );
};

export default SearchForm;
