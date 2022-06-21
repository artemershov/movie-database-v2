import type { NextPage, GetStaticProps } from 'next';
import { Layout } from '../components/Layout';
import MovieList from '../components/MovieList';
import { API_BASE_URL } from '../constants/path';
import { MovieListItem } from '../types/movie_list';

interface TopPageProps {
    topRatedMovies: MovieListItem[];
}

const SECONDS_IN_DAY = 60 * 60 * 24;

const TopPage: NextPage<TopPageProps> = ({ topRatedMovies }) => {
    return (
        <Layout title="Top rater movies">
            <h1>Top rater movies</h1>
            <MovieList data={topRatedMovies} />
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch(`${API_BASE_URL}/movie/top_rated?api_key=${process.env.API_KEY}`);
    const { results } = await response.json();

    return { props: { topRatedMovies: results }, revalidate: 10 * SECONDS_IN_DAY };
};

export default TopPage;
