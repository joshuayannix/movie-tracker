const likesList = document.querySelector('.likes__list');


/*
  from movieView

  <div class="movie-header">
      <h1 class="movie-title">${movie.title}</h1>
      <button class="like-button" style="background-color: white">Like</button>
  </div>

*/

// In order for your likes color to persist, You need to:
// add isLiked as a parameter to your renderMovie function in movieView, and adjust markup
// pass isLiked into your renderMovie function call in index

export const toggleLikeBtn = isLiked => {
  
  const likeColor = isLiked ? 'blue' : 'white';
  document.querySelector('.like-button').setAttribute("style", `background-color: ${likeColor}`)
  
}

export const renderLike = like => {
  const markup = `

    <li>
    <a class="likes__link" href="#${like.id}">
      <figure class="movie-poster">
        <img class='poster' src=${like.poster} alt='${like.title}'> 
      </figure>
      <div class="movie-info">
        <h4>${like.title}</h4>
        <p>${like.year}</p>
      </div>   
    </a>
  </li>
  `
  likesList.insertAdjacentHTML('beforeend', markup);
};

export const deleteLike = id => {
  const el = document.querySelector(`.likes__link[href*="${id}"]`).parentElement;
  if (el) el.parentElement.removeChild(el);
};

