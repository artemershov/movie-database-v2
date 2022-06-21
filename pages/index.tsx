import type { NextPage, GetServerSideProps } from 'next';
import { Layout } from '../components/Layout';
import MovieList from '../components/MovieList';
import { API_BASE_URL } from '../constants/path';
import { MovieListItem } from '../types/movie_list';

interface HomePageProps {
    popularMovies: MovieListItem[];
}

const HomePage: NextPage<HomePageProps> = ({ popularMovies }) => {
    return (
        <Layout title="Popular movies">
            <h1>Popular movies</h1>
            <MovieList data={popularMovies} />
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const response = await fetch(`${API_BASE_URL}/movie/popular?api_key=${process.env.API_KEY}`);
    const { results } = await response.json();

    return { props: { popularMovies: results } };
};

export default HomePage;
