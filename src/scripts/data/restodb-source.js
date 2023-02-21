import API_ENDPOINT from '../globals/api-endpoint';

class RestoDbSource {
  static async listRestos() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailMovie(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestoDbSource;
