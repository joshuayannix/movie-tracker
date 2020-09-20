const searchInput = document.querySelector('.search__field');
const searchResList = document.querySelector('.results__list');
const searchResPages = document.querySelector('.results__pages');

export const getInput = () => searchInput.value;

export const clearInput = () => {
  searchResList.innerHTML = '';
  searchResPages.innerHTML = '';
}

export const clearResults = () => {
  searchResList.innerHTML = '';
  searchResPages.innerHTML = '';
}

// Render a single movie
const renderMovie = movie => {
  const markup = `
  <li class='movie-item'>
    <p>${movie.Title}</p>
    <p>${movie.Year}</p
    <p>${movie.imdbID}</p>
    <img class='poster' src=${movie.Poster} alt='${movie.title}'> 
  </li>
  `;
  searchResList.insertAdjacentHTML('beforeend', markup)
}

// Render all movies
export const renderResults = (movies, page = 1, resPerPage = 30) => {
  // Render current page results
  const start = (page - 1) * resPerPage;
  const end = page * resPerPage;

  movies.slice(start, end).forEach(renderMovie);
  
}

