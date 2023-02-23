const Home = {
  async render() {
    return `
      <section id="hero">
        <div class="hero-content">
          <h1>Fastest Places Find <br>Special<span style="color:lightblue"> Restaurants</span></h1>
          <p>Fast Resto give you new experience find restaurant and it's all about FAST</p>
        </div>
        <div class="hero-image">
          <img src="./images/home/hero-image.svg" alt="fast-resto-hero-image">
        </div>
      </section>
      <section id="partner">
        <h1>Join with Us</h1>
      </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
