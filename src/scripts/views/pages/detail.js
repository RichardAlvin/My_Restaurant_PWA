import UrlParser from '../../routes/url-parser';
import RestoDbSource from '../../data/restodb-source';
import { createRestoDetailTemplate, createReviewDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-presenter';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const Detail = {
  async render() {
    return `
      <div id="resto-detail" class="resto-detail"></div>
      <div id="resto-review" class="review-resto"></div>
      <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestoDbSource.detailResto(url.id);
    const restoContainer = document.querySelector('#resto-detail');

    const restoReviewContainer = document.querySelector('#resto-review');

    const categoryTemplate = resto.categories.map((u) => u.name).join(' ');
    const foodTemplate = resto.menus.foods.map((u) => u.name).join(',');
    const drinkTemplate = resto.menus.drinks.map((u) => u.name).join(',');

    const reviews = resto.customerReviews;
    reviews.slice(-3).forEach((review) => {
      restoReviewContainer.innerHTML += createReviewDetailTemplate(review);
    });
    // eslint-disable-next-line max-len
    restoContainer.innerHTML = createRestoDetailTemplate(resto, categoryTemplate, foodTemplate, drinkTemplate);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestos: FavoriteRestoIdb,
      resto: {
        id: resto.id,
        name: resto.name,
        pictureId: resto.pictureId,
        description: resto.description,
        city: resto.city,
        rating: resto.rating,
      },
    });
  },
};

export default Detail;
