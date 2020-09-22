import Movie from './models/Movie';
import Search from './models/Search';
import { clearLoader, renderLoader } from './views/loader';
import * as searchView from './views/searchView';
import * as movieView from './views/movieView';
import Likes from './models/Likes';
import * as likesView from './views/likesView';

//Testing that the API call works
// const search = new Search('batman')
// search.getResults();
// console.log(search);

const state = {};

const controlSearch = async() => {
  // 1. Get query from view
  const query = searchView.getInput();
  if(!query) {
    alert('Please enter a search term')
  }
  if(query) {
    // 2. New search object and add to state
    state.search = new Search(query)

    // 3. Prepare UI for results
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(document.querySelector('.results'));

    try {
      // 4. Search for recipes
      await state.search.getResults();

      // 5. Render results on UI
      clearLoader();
      searchView.renderResults(state.search.result);
    } catch (error) {
      clearLoader();
    }
  }
}

// When submit search form, show results
const searchForm = document.querySelector('.search');
searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch()
  console.log('searching');
})

// Add event listeners to page buttons
const searchResPages = document.querySelector('.results__pages');
searchResPages.addEventListener('click', e => {
  const btn = e.target.closest('.btn-inline');
  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResults(state.search.result, goToPage);
  }
});
 
/**
 * Movie Controller
 */
const movieSection = document.querySelector('.movie-section');

const controlMovie = async () => {
  const id = window.location.hash.replace('#', '');

  if(id) {
    // Prepare UI for changes
    movieView.clearMovie();
    renderLoader(movieSection);
    
    // Create new movie object
    state.movie = new Movie(id);

    try {
      // Get movie data
      await state.movie.getMovie();

      // Render movie
      clearLoader();
      movieView.renderMovie(state.movie)
    } catch (err) {
      console.log('something wrong with the API call in controlMovie');
    }
  }
};

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlMovie));


/**
 * Likes Controller
 */

const controlLike = () => {
  if (!state.likes) state.likes = new Likes();

  const currentID = state.movie.id;

  // User has not yet liked current movie
  if (!state.likes.isLiked(currentID)) {
    // Add like to the state
    const newLike = state.likes.addLike(
      currentID,
      state.movie.title,
      state.movie.year,
      state.movie.poster
    )
    // Toggle the like button
    likesView.toggleLikeBtn(true);

    // Add the like to the UI list
    likesView.renderLike(newLike);

    // User HAS liked current movie
  } else {
    // Remove like from the state
    state.likes.deleteLike(currentID);

    // Toggle the like button
    likesView.toggleLikeBtn(false);

    // Remove like from the UI list
    likesView.deleteLike(currentID);
  }
  
}

/**
* Restore liked movies on page load
*/

/**
* Handling movie button clicks
*/

movieSection.addEventListener('click', e => {
  if(e.target.matches('.like-button, .like-button *')) {  
    controlLike();
  }
})

