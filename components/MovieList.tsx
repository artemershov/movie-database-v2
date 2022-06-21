import Link from 'next/link';
import Image from 'next/image';
import { MovieListItem } from '../types/movie_list';
import { POSTER_BASE_URL } from '../constants/path';
import { getYear } from '../utils/getYear';
import styles from '../styles/MovieList.module.css';

interface MovieListProps {
    data: MovieListItem[];
}

const MovieList = ({ data }: MovieListProps) => {
    return (
        <ul className={styles.container}>
            {data.map((movie) => (
                <li key={movie.id} className={styles.card}>
                    <Link href={`/movie/${movie.id}`}>
                        <a>
                            <Image
                                src={`${POSTER_BASE_URL}${movie.poster_path}`}
                                alt={movie.title}
                                width="500"
                                height="750"
                            />
                            <div className={styles.cardBody}>
                                <h4 className={styles.title}>
                                    {movie.title}{' '}
                                    <span className={styles.date}>
                                        {getYear(movie.release_date)}
                                    </span>
                                </h4>

                                <div className={styles.rating}>
                                    ⭐ {movie.vote_average}
                                </div>
                            </div>
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default MovieList;
