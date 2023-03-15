import { createRestoItemTemplate } from '../../templates/template-creator';

class FavoriteRestoSearchView {
  // eslint-disable-next-line class-methods-use-this
  getTemplate() {
    return `
      <div class="content">
      <h3>Search : </h3>
      <input id="query" type="text" style="min-height:50px">
      <h2 class="content__heading">Your Favorite Resto</h2>
        <div id="restos" class="restos">
        </div>
      </div>
   `;
  }

  // eslint-disable-next-line class-methods-use-this
  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestos(restos) {
    this.showFavoriteRestos(restos);
  }

  showFavoriteRestos(restos = []) {
    let html;
    if (restos.length) {
      html = restos.reduce((carry, resto) => carry.concat(createRestoItemTemplate(resto)), '');
    } else {
      html = this._getEmptyRestoTemplate();
    }

    document.getElementById('restos').innerHTML = html;

    document.getElementById('restos').dispatchEvent(new Event('restos:updated'));
  }

  // eslint-disable-next-line class-methods-use-this
  _getEmptyRestoTemplate() {
    return '<div class="resto-item__not__found restos__not__found">Tidak ada restoran untuk ditampilkan</div>';
  }
}

export default FavoriteRestoSearchView;
