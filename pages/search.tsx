import { useState } from 'react';
import type { NextPage, GetStaticProps } from 'next';
import { Layout } from '../components/Layout';
import MovieList from '../components/MovieList';
import SearchForm from '../components/SearchForm';
import { MovieListItem } from '../types/movie_list';

const TopPage: NextPage = () => {
    const [isLoading, setIsloading] = useState(false);
    const [data, setData] = useState<MovieListItem[]>([]);

    const handleSubmit = async (value: string) => {
        if (!value) {
            return;
        }

        setIsloading(true);
        const response = await fetch(`/api/search?query=${value}`);
        const result = await response.json();
        setData(result);
        setIsloading(false);
    };

    return (
        <Layout title="Search">
            <h1>Search</h1>
            <SearchForm onSubmit={handleSubmit} />
            {isLoading ? <h4>Loading...</h4> : <MovieList data={data} />}
        </Layout>
    );
};

export default TopPage;
