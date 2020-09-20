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

    <div class="movie-poster">
      <img class='poster' src=${movie.Poster} alt='${movie.title}'> 
    </div>

    <div class="movie-info">
      <div>${movie.Title}</div>
      <div>${movie.Year}</div
      <div>${movie.imdbID}</div>
    </div>   
    
  </li>
  `;
  searchResList.insertAdjacentHTML('beforeend', markup)
}

const createButton = (page, type) => `
  <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
    <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
    <svg class="search__icon">
      <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
    </svg>
  </button>
`;

const renderButtons = (page, numResults, resPerPage) => {
  const pages = Math.ceil(numResults / resPerPage);

  // if you only have one page, then no buttons will be rendered
  // however, if you have more than one page...
  let button;
  if (page === 1 && pages > 1) {
    // only show next page button
    button = createButton(page, 'next')
  } else if (page < pages) {
    // show both buttons
    button = `
      ${createButton(page, 'prev')}
      ${createButton(page, 'next')}
    `;
  } else if (page === pages && pages > 1) {
    // only show previous page button
    button = createButton(page, 'prev');
  }

  searchResPages.insertAdjacentHTML('afterbegin', button);
};

// Render all movies
export const renderResults = (movies, page = 1, resPerPage = 10) => {
  // Render current page results
  const start = (page - 1) * resPerPage;
  const end = page * resPerPage;

  movies.slice(start, end).forEach(renderMovie);
  
  // render pagination buttons
  renderButtons(page, movies.length, resPerPage)
}

