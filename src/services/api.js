const URL = 'https://api.mercadolibre.com/sites/MLB/';

export async function getCategories() {
  return fetch(`${URL}categories`)
    .then((response) => response.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  return fetch(`${URL}search?category=${categoryId}&q=${query}`)
    .then((response) => response.json());
}
