const API_KEY ='d6f2047fbcc464bfa46b25cbb751b07f';

export default {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovie:`/discover/movie?api_key=${API_KEY}&with_generes=28`,
    fetchComedyMovie:`/discover/movie?api_key=${API_KEY}&with_generes=35`,
    fetchHorrorMovie:`/discover/movie?api_key=${API_KEY}&with_generes=27`,
    fetchRomanceMovie:`/discover/movie?api_key=${API_KEY}&with_generes=10749`,
    fetchMystery:`/discover/movie?api_key=${API_KEY}&with_generes=9648`,
    fetchSciFci:`/discover/movie?api_key=${API_KEY}&with_generes=878`,
    fetchWestern:`/discover/movie?api_key=${API_KEY}&with_generes=37`,
    fetchAnimaton:`/discover/movie?api_key=${API_KEY}&with_generes=16`,
    fetchTv:`/discover/movie?api_key=${API_KEY}&with_generes=10770`,
}