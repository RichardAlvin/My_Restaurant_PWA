import CONFIG from '../../globals/config';

const createMovieDetailTemplate = (movie) => `
  <h2 class="movie__title">${movie.title}</h2>
  <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + movie.poster_path}" alt="${movie.title}" />
  <div class="movie__info">
    <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${movie.tagline}</p>
    <h4>Release Date</h4>
    <p>${movie.release_date}</p>
    <h4>Duration</h4>
    <p>${movie.runtime} minutes</p>
    <h4>Rating</h4>
    <p>${movie.vote_average}</p>
  </div>
  <div class="movie__overview">
    <h3>Overview</h3>
    <p>${movie.overview}</p>
  </div>
`;

const createRestoItemTemplate = (resto) => `
  <div class="resto-item">
    <div class="resto-item__header">
      <img class="resto-item__header__poster" alt="${resto.name}"
           src="https://restaurant-api.dicoding.dev/images/medium/.${resto.pictureId}">
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
      </div>
    </div>
    <div class="movie-item__content">
      <h3><a href="/#/detail/${resto.id}">${resto.name}</a></h3>
      <p>${resto.description}</p>
    </div>
  </div>
`;

export { createRestoItemTemplate, createMovieDetailTemplate };
