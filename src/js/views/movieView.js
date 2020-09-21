const movieSection = document.querySelector('.movie-section');

export const clearMovie = () => {
  movieSection.innerHTML = ''
}

export const renderMovie = (movie) => {
  const markup = `
    <figure>
      <img src="${movie.poster}" alt="${movie.poster}">
    </figure>

    <div class="movie__details-firstColumn">
      <div>${movie.director}</div>
      <div>${movie.actors}</div>        
      <div>${movie.awards}</div>        
      <div>${movie.boxOffice}</div>        
      <div>${movie.country}</div>        
     
    </div>

    <div class="movie__details-secondColumn">
      <div>${movie.genre}</div>
      <div>${movie.language}</div>
     
    </div>
  `;
  movieSection.insertAdjacentHTML('afterbegin', markup);
};