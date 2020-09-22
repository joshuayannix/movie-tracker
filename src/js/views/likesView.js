const likesList = document.querySelector('.likes__list');


export const toggleLikeBtn = () => {
  document.querySelector('.like-button').setAttribute("style", "background-color: blue")
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

