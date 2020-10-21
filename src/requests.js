const API_KEY ='d6f2047fbcc464bfa46b25cbb751b07f';

export default {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovie:`/disover/movie?api_key=${API_KEY}&with_generes=28`,
    fetchComedyMovie:`/disover/movie?api_key=${API_KEY}&with_generes=35`,
    fetchHorrorMovie:`/disover/movie?api_key=${API_KEY}&with_generes=27`,
    fetchRomanceMovie:`/disover/movie?api_key=${API_KEY}&with_generes=10749`,
    fetchMystery:`/disover/movie?api_key=${API_KEY}&with_generes=9648`,
    fetchSciFci:`/disover/movie?api_key=${API_KEY}&with_generes=878`,
    fetchWestern:`/disover/movie?api_key=${API_KEY}&with_generes=37`,
    fetchAnimaton:`/disover/movie?api_key=${API_KEY}&with_generes=16`,
    fetchTv:`/disover/movie?api_key=${API_KEY}&with_generes=10770`,
}