import Search from './models/Search';
import { clearLoader, elementStrings, renderLoader } from './views/loader';
import * as searchView from './views/searchView';

//Testing that the API call works
const search = new Search('batman')
search.getResults();
console.log(search);

const state = {};

const controlSearch = async() => {
  // 1. Get query from view
  const query = 'batman'

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
      console.log(error);
      clearLoader();
    }
  }
}

// When submit search form, show results
const searchForm = document.querySelector('.search');
searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch()
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
 * Search Controller
 */



 
/**
 * Movie Controller
 */

/**
 * Likes Controller
 */

/**
 * Restore liked movies on page load
 */

 /**
  * Handling movie button clicks
  */








// const form = document.querySelector('.movie-form');
// const searchInput = document.getElementById('searchInput');
// const moviesList = document.querySelector('.movies-list')
// const KEY = 'a346feec';



// const setBackToDefault = () => {
//   searchInput.value = '';
// }



// const clearItems = () => {
//   const movies = document.querySelectorAll('.movie-item');
//   movies.forEach(movie => {
//     moviesList.removeChild(movie)
//   })
// }

// const showResults = e => {
//   e.preventDefault()
  
//   clearItems();
//   search(searchInput.value);
//   setBackToDefault();
  
// }

// // Event Listeners
// form.addEventListener('submit', showResults)
