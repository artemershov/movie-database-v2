import { BaseMovie } from "./movie";

export type MovieListResponse = {
    page: number;
    results: MovieListItem[];
    total_pages: number;
    total_results: number;
};

export type MovieListItem = BaseMovie & {
    genre_ids: number[];
}