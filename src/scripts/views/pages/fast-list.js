import RestoDbSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const FastList = {
  async render() {
    return `
    <div class="fast-list">
        <h1 class="content__heading">Now Open For Service</h1>
        <div id="restos" class="restos">
        </div>
    </div>
    `;
  },

  async afterRender() {
    const restos = await RestoDbSource.listRestos();
    const restosContainer = document.querySelector('#restos');
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default FastList;
