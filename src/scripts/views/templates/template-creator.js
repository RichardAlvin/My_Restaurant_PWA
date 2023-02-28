const createRestoDetailTemplate = (resto) => `
  <h2 class="movie__title">${resto.name}</h2>
  <img class="movie__poster" src="https://restaurant-api.dicoding.dev/images/medium/${resto.pictureId}" />
  <div class="movie__info">
    <h3>Information</h3>
    <h4>Tagline</h4>
  </div>
  <div class="movie__overview">
    <h3>Overview</h3>
    <p>${resto.description}</p>
  </div>
`;

const createRestoItemTemplate = (resto) => `
  <div class="resto-item">
      <img alt="${resto.name}" src="https://restaurant-api.dicoding.dev/images/medium/${resto.pictureId}">
      <h3><a href="/#/detail/${resto.id}">${resto.name}</a></h3>
      <p>${resto.description}</p>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
