export interface RespAllMoviesDataStruct {
    data: Data;
    status: number;
    statusText: string;
    headers: ResponceDataHeaders;
    config: Config;
    request: Request;
}

export interface Config {
    url: string;
    method: string;
    headers: ConfigHeaders;
    transformRequest: null[];
    transformResponse: null[];
    timeout: number;
    xsrfCookieName: string;
    xsrfHeaderName: string;
    maxContentLength: number;
    maxBodyLength: number;
    transitional: Transitional;
}

export interface ConfigHeaders {
    Accept: string;
}

export interface Transitional {
    silentJSONParsing: boolean;
    forcedJSONParsing: boolean;
    clarifyTimeoutError: boolean;
}

export interface Data {
    dates: Dates;
    page: number;
    results: Result[];
    total_pages: number;
    total_results: number;
}

export interface Dates {
    maximum: string;
    minimum: string;
}

export interface Result {
    length?: any;
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: OriginalLanguage;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export enum OriginalLanguage {
    En = "en",
}

export interface ResponceDataHeaders {
    "cache-control": string;
    "content-type": string;
}

export interface Request {
}


export type Movie = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: OriginalLanguage;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    revenue?: number;
}