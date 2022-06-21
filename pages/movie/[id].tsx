import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { ParsedUrlQuery } from 'querystring';
import { API_BASE_URL, POSTER_BASE_URL } from '../../constants/path';
import { Layout } from '../../components/Layout';
import { MovieListItem } from '../../types/movie_list';
import { MovieDetailsResponse } from '../../types/movie_details';
import { getYear } from '../../utils/getYear';
import styles from '../../styles/MoviePage.module.css';

interface MoviePageProps {
    data: MovieDetailsResponse;
}

interface MoviePageParams extends ParsedUrlQuery {
    id: string;
}

const MoviePage: NextPage<MoviePageProps> = ({ data }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <h4>Loading...</h4>;
    }

    return (
        <Layout title={data.title}>
            <div className={styles.wrapper}>
                <div>
                    <Image
                        src={`${POSTER_BASE_URL}${data.poster_path}`}
                        alt={data.title}
                        width="500"
                        height="750"
                    />
                </div>
                <div>
                    <h1 className={styles.title}>
                        {data.title}{' '}
                        <span className={styles.year}>
                            {getYear(data.release_date)}
                        </span>
                    </h1>
                    <h4 className={styles.tagline}>{data.tagline}</h4>

                    <div className={styles.rating}>⭐ {data.vote_average}</div>
                    {data.genres.map((genre) => (
                        <div key={genre.id} className={styles.genre}>
                            {genre.name}
                        </div>
                    ))}

                    <div className={styles.description}>{data.overview}</div>

                    <a
                        href={`https://rezka.ag/search/?do=search&subaction=search&q=${encodeURI(
                            data.title
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        🔗 Смотреть на rezka.ag
                    </a>
                </div>
            </div>
        </Layout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch(
        `${API_BASE_URL}/movie/top_rated?api_key=${process.env.API_KEY}`
    );
    const { results } = await response.json();
    const idsList = results.map((movie: MovieListItem) => ({
        params: { id: String(movie.id) },
    }));

    return { paths: idsList, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id } = params as MoviePageParams;
    const response = await fetch(
        `${API_BASE_URL}/movie/${id}?api_key=${process.env.API_KEY}`
    );
    const data = await response.json();
    return { props: { data } };
};

export default MoviePage;
