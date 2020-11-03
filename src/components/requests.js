const API_KEY ='d6f2047fbcc464bfa46b25cbb751b07f';

export default {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovie:`/discover/movie?api_key=${API_KEY}&with_generes=28&language=en-US`,
    fetchComedyMovie:`/discover/movie?api_key=${API_KEY}&with_generes=35&language=en-US`,
    fetchHorrorMovie:`/discover/movie?api_key=${API_KEY}&with_generes=27&language=en-US`,
    fetchRomanceMovie:`/discover/movie?api_key=${API_KEY}&with_generes=10749&language=en-US`,
    fetchMystery:`/discover/movie?api_key=${API_KEY}&with_generes=9648&language=en-US`,
    fetchSciFci:`/discover/movie?api_key=${API_KEY}&with_generes=878&language=en-US`,
    fetchWestern:`/discover/movie?api_key=${API_KEY}&with_generes=37&language=en-US`,
    fetchAnimaton:`/discover/movie?api_key=${API_KEY}&with_generes=16&language=en-US`,
    fetchTv:`/discover/movie?api_key=${API_KEY}&with_generes=10770&language=en-US`,
    searchMovie:`search/movie?api_key=${API_KEY}$language=en-US&include_adult=false&query=`
}