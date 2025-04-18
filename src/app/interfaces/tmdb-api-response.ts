import { Movie } from "./movie";

export interface TmdbApiResponse {

    page:number;
    results:Movie[];
    total_pages:number;
    total_results:number;
}
