import RestoDbSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <section id="hero" style="background-color:#dcecfa">
        <div class="hero-content">
          <h1>Fastest Places Find <br>Special<span style="color:lightblue"> Restaurants</span></h1>
          <p>Fast Resto give you new experience find restaurant and it's all about FAST</p>
        </div>
        <div class="hero-image">
          <picture>
            <source media="(max-width: 600px)" srcset="./images/home/hero-image.svg" type="image/jpeg">
            <img class="lazyload" src="./images/home/hero-image.svg" alt="fast-resto-hero-image" >
          </picture>
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 30 1440 300"><path fill="#dcecfa" fill-opacity="1" d="M0,96L12,133.3C24,171,48,245,72,256C96,267,120,213,144,197.3C168,181,192,203,216,208C240,213,264,203,288,170.7C312,139,336,85,360,90.7C384,96,408,160,432,170.7C456,181,480,139,504,144C528,149,552,203,576,202.7C600,203,624,149,648,122.7C672,96,696,96,720,128C744,160,768,224,792,229.3C816,235,840,181,864,165.3C888,149,912,171,936,160C960,149,984,107,1008,80C1032,53,1056,43,1080,85.3C1104,128,1128,224,1152,224C1176,224,1200,128,1224,90.7C1248,53,1272,75,1296,96C1320,117,1344,139,1368,160C1392,181,1416,203,1428,213.3L1440,224L1440,0L1428,0C1416,0,1392,0,1368,0C1344,0,1320,0,1296,0C1272,0,1248,0,1224,0C1200,0,1176,0,1152,0C1128,0,1104,0,1080,0C1056,0,1032,0,1008,0C984,0,960,0,936,0C912,0,888,0,864,0C840,0,816,0,792,0C768,0,744,0,720,0C696,0,672,0,648,0C624,0,600,0,576,0C552,0,528,0,504,0C480,0,456,0,432,0C408,0,384,0,360,0C336,0,312,0,288,0C264,0,240,0,216,0C192,0,168,0,144,0C120,0,96,0,72,0C48,0,24,0,12,0L0,0Z"></path></svg>
      <section id="daftar-resto">
        <h1>Explore Restaurant</h1>
        <div id="restos" class="restos">
        </div>
        <div class="fast-list-btn">
          <a href='#/fast-list'>Find More...</a>
        </div>
      </section>
      <section id="partner" style="background-color:#dcecfa">
        <div class="partner-left">
          <picture>
            <source media="(max-width: 600px)" srcset="./images/home/partner.svg" type="image/jpeg">
            <img class="lazyload" src="./images/home/partner.svg" alt="join-partner">
          </picture>
        </div>
        <div class="partner-right">
          <h1>Join with Us</h1>
          <p>You want become our partner, please fill your name and you will get many advantage. One of them is your restaurant will be promote to this website.</p>
          <input type="text" id="name" name="name" placeholder="Fill Your Name" style="width:200px; height:50px; font-size:20px;">
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#dcecfa" fill-opacity="1" d="M0,96L12,133.3C24,171,48,245,72,256C96,267,120,213,144,197.3C168,181,192,203,216,208C240,213,264,203,288,170.7C312,139,336,85,360,90.7C384,96,408,160,432,170.7C456,181,480,139,504,144C528,149,552,203,576,202.7C600,203,624,149,648,122.7C672,96,696,96,720,128C744,160,768,224,792,229.3C816,235,840,181,864,165.3C888,149,912,171,936,160C960,149,984,107,1008,80C1032,53,1056,43,1080,85.3C1104,128,1128,224,1152,224C1176,224,1200,128,1224,90.7C1248,53,1272,75,1296,96C1320,117,1344,139,1368,160C1392,181,1416,203,1428,213.3L1440,224L1440,0L1428,0C1416,0,1392,0,1368,0C1344,0,1320,0,1296,0C1272,0,1248,0,1224,0C1200,0,1176,0,1152,0C1128,0,1104,0,1080,0C1056,0,1032,0,1008,0C984,0,960,0,936,0C912,0,888,0,864,0C840,0,816,0,792,0C768,0,744,0,720,0C696,0,672,0,648,0C624,0,600,0,576,0C552,0,528,0,504,0C480,0,456,0,432,0C408,0,384,0,360,0C336,0,312,0,288,0C264,0,240,0,216,0C192,0,168,0,144,0C120,0,96,0,72,0C48,0,24,0,12,0L0,0Z"></path></svg>
      `;
  },

  async afterRender() {
    const restos = await RestoDbSource.listRestos();
    const restoContainer = document.querySelector('#restos');

    restos.slice(-3).forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Home;
