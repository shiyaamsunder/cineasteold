const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const requests = {
    fetchTrending: `trending/movie/week?api_key=${API_KEY}&language=en-US`,
    fetchToprated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchTrendingTV: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`


}





export default requests