const createRestoDetailTemplate = (resto, categoryTemplate, foodTemplate, drinkTemplate) => `
  <div class="resto-detail-left">
    <h2 class="resto__name">${resto.name}</h2>
    <img class="resto__poster class="lazyload" src="https://restaurant-api.dicoding.dev/images/medium/${resto.pictureId}" alt="${resto.name}"/>
    <h3>${resto.address}</h3>
    <h3>${resto.city}</h3>
  </div>
  <div class="resto-detail-right">
    <div class="resto__info">
      <h3>Kategori</h3>
      <p>${categoryTemplate}</p>
      <h3>Foods</h3>
      <p>${foodTemplate}</p>
      <h3>Drinks</h3>
      <p>${drinkTemplate}</p>
    </div>
    <div class="resto__overview">
      <h3>Deskripsi</h3>
      <p>${resto.description}</p>
    </div>
  </div>

`;

const createRestoItemTemplate = (resto) => `
  <div class="resto-item">
    
    <img class="lazyload" alt="${resto.name || '-'}" data-src="https://restaurant-api.dicoding.dev/images/medium/${resto.pictureId}">
    <p class="rate">Rating: ${resto.rating || '-'}</p>
    <h2 class="resto__name"><a href="/#/detail/${resto.id}">${resto.name || '-'}</a></h2>
    <p class="rate">${resto.city || '-'}</p>
  </div>
`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true" aria-label="like this resto"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true" aria-label="unlike this resto"></i>
  </button>
`;

const createReviewDetailTemplate = (review) => `
  <div class="review-resto-inner">
    <h3>${review.name}</h3>
    <p>${review.date}</p>
    <h4>${review.review}</h4> 
  </div>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
  createReviewDetailTemplate,
};
