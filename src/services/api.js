const URL = 'https://api.mercadolibre.com/sites/MLB/';
const ADJUST = -10;

export async function getCategories() {
  return fetch(`${URL}categories`)
    .then((response) => response.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId === 'MLB') {
    return fetch(`${URL.slice(0, ADJUST)}items?ids=${query}`)
      .then((response) => response.json());
  }
  return fetch(`${URL}search?category=${categoryId}&q=${query}`)
    .then((response) => response.json());
}
