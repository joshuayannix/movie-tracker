//select the likes list

const likesList = document.querySelector('.likes__list');


export const toggleLikeBtn = () => {
  document.querySelector('.like-button').setAttribute("style", "background-color: blue")
}

export const renderLike = like => {
  const markup = `
    <li>
      <a class="likes__link" href="#${like.id}">
        <figure class="likes__fig">
          <img src="${like.poster}" alt="${like.poster}">
        </figure>
        <div class="likes__data">
          <h4 class="likes__name">${like.title}</h4>
          <p class="likes__year">${like.year}</p>
        </div>
      </a>
    </li>
  `
  likesList.insertAdjacentHTML('beforeend', markup);
};

export const deleteLike = id => {
  const el = document.querySelector(`.likes__link[href*="${id}"]`).parentElement;
  if (el) e.parentElement.removeChild(el);
};