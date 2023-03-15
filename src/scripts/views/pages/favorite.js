import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import FavoriteRestoShowPresenter from './favorite-restos/favorite-resto-show-presenter';
import FavoriteRestoSearchView from './favorite-restos/favorite-resto-search-view';
import FavoriteRestoSearchPresenter from './favorite-restos/favorite-resto-search-presenter';

const view = new FavoriteRestoSearchView();

const Favorite = {
  async render() {
    // return `
    //       <div class="fast-list">
    //         <h2>Your Liked Resto</h2>
    //         <div id="favorite-restos" class="daftar-resto-inner">
    //       </div>
    //     `;
    return view.getTemplate();
  },

  async afterRender() {
    // const restos = await FavoriteRestoIdb.getAllResto();
    // const restoContainer = document.querySelector('#favorite-restos');
    // restos.forEach((resto) => {
    //   restoContainer.innerHTML += createRestoItemTemplate(resto);
    // });
    // eslint-disable-next-line no-new
    new FavoriteRestoShowPresenter({ view, favoriteRestos: FavoriteRestoIdb });
    // eslint-disable-next-line no-new
    new FavoriteRestoSearchPresenter({ view, favoriteRestos: FavoriteRestoIdb });
  },
};

export default Favorite;
