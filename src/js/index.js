import Search from './models/Search';
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

    try {
      // 4. Search for recipes
      await state.search.getResults();

      // 5. Render results on UI
      console.log('from controlSearch');
      searchView.renderResults(state.search.result);
    } catch (error) {
      console.log(error);
    }
  }
}

document.querySelector('.search').addEventListener('submit', e => {
  e.preventDefault();
  controlSearch()
})

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