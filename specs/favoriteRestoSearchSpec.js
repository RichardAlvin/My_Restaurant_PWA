/* eslint-disable no-undef */
import FavoriteRestoSearchPresenter from '../src/scripts/views/pages/favorite-restos/favorite-resto-search-presenter';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';
import FavoriteRestoSearchView from '../src/scripts/views/pages/favorite-restos/favorite-resto-search-view';

describe('Searching restos', () => {
  let presenter;
  let favoriteRestos;
  let view;

  const searchRestos = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestoSearchContainer = () => {
    view = new FavoriteRestoSearchView();
    document.body.innerHTML = view.getTemplate();
  };
  const constructPresenter = () => {
    favoriteRestos = spyOnAllFunctions(FavoriteRestoIdb);
    presenter = new FavoriteRestoSearchPresenter({
      favoriteRestos,
      view,
    });
  };

  beforeEach(() => {
    setRestoSearchContainer();
    constructPresenter();
  });

  describe('When query is not empty', () => {
    it('should be able to capture the query typed by the user', () => {
      searchRestos('film a');

      expect(presenter.latestQuery).toEqual('film a');
    });

    it('should ask the model to search for liked restos', () => {
      searchRestos('film a');

      expect(favoriteRestos.searchRestos).toHaveBeenCalledWith('film a');
    });

    it('should show the found restos', () => {
      presenter._showFoundRestos([{ id: 1 }]);
      expect(document.querySelectorAll('.resto-item').length)
        .toEqual(1);

      presenter._showFoundRestos([{
        id: 1,
        name: 'Satu',
      }, {
        id: 2,
        name: 'Dua',
      }]);
      expect(document.querySelectorAll('.resto-item').length)
        .toEqual(2);
    });

    it('should show the title of the found restos', () => {
      presenter._showFoundRestos([{
        id: 1,
        name: 'Satu',
      }]);
      expect(document.querySelectorAll('.resto__name')
        .item(0).textContent)
        .toEqual('Satu');
    });

    it('should show - for found resto without title', (done) => {
      document.getElementById('restos').addEventListener('restos:updated', () => {
        const restoTitles = document.querySelectorAll('.resto__name');
        expect(restoTitles.item(0).textContent).toEqual('-');

        done();
      });

      favoriteRestos.searchRestos.withArgs('film a').and.returnValues([
        { id: 444 },
      ]);

      searchRestos('film a');
    });
  });

  describe('When query is empty', () => {
    it('should capture the query as empty', () => {
      searchRestos(' ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestos('    ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestos('');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestos('\t');
      expect(presenter.latestQuery.length).toEqual(0);
    });

    xit('should show all favorite restos', () => {
      searchRestos('    ');

      expect(favoriteRestos.getAllRestos)
        .toHaveBeenCalled();
    });
  });

  describe('When no favorite restos could be found', () => {
    it('should show the empty message', (done) => {
      document.getElementById('restos').addEventListener('restos:updated', () => {
        expect(document.querySelectorAll('.resto-item__not__found').length).toEqual(1);

        done();
      });

      favoriteRestos.searchRestos.withArgs('film a').and.returnValues([]);

      searchRestos('film a');
    });

    it('should not show any resto', (done) => {
      document.getElementById('restos').addEventListener('restos:updated', () => {
        expect(document.querySelectorAll('.resto-item').length)
          .toEqual(0);
        done();
      });

      favoriteRestos.searchRestos.withArgs('film a')
        .and
        .returnValues([]);

      searchRestos('film a');
    });
  });
});
