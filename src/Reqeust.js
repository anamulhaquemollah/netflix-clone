const key = "4853c82165705d2bdbbcfc92cd3031f8"; 

const requests = {
    requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`, 
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`, 
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`, 
    requestUpcoming: `
    https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`, 
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`
    
}; 

export default requests; 