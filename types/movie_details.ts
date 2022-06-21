import { BaseMovie } from "./movie";

export type MovieDetailsResponse = BaseMovie & {
    belongs_to_collection: null;
    budget: string;
    genres: Genre[];
    homepage: string;
    imdb_id: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
};

export type Genre = {
    id: number;
    name: string;
};

export type ProductionCompany = {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
};

export type ProductionCountry = {
    iso_3166_1: string;
    name: string;
};

export type SpokenLanguage = {
    english_name: string;
    iso_639_1: string;
    name: string;
};
