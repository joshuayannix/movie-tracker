const movieSection = document.querySelector('.movie-section');

export const clearMovie = () => {
  movieSection.innerHTML = ''
}

export const renderMovie = (movie) => {
  const markup = `
    <figure>
      <img src="${movie.poster}" alt="${movie.title}">
    </figure>
    <div class="movie__details-columns">

      <div class="movie__details-firstColumn">
        <div>${movie.actors}</div> 
        <div>${movie.awards}</div>  
        <div>${movie.boxOffice}</div> 
        <div>${movie.country}</div> 
        <div>${movie.dvd}</div> 
        <div>${movie.director}</div>
        <div>${movie.genre}</div>
        <div>${movie.metascore}</div>
        <div>${movie.plot}</div>             
      </div>

    <div class="movie__details-secondColumn">
      <div>${movie.production}</div>
      <div>${movie.rated}</div>
      <div>${movie.released}</div>
      <div>${movie.runtime}</div>
      <div>${movie.type}</div>
      <div>${movie.writer}</div>
      <div>${movie.year}</div>
      <div>${movie.imdbRating}</div>
      <div>${movie.imdbVotes}</div>     
    </div>
    
  </div>
    
  `;
  movieSection.insertAdjacentHTML('afterbegin', markup);
};