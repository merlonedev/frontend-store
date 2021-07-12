export async function getCategories() {
  const URL_CATEGORIES = 'https://api.mercadolibre.com/sites/MLB/categories';
  let resultRequest = await fetch(URL_CATEGORIES);
  resultRequest = await resultRequest.json();
  return resultRequest;
}
export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let apiURL = '';
  if (categoryId && query) {
    apiURL = `https://api.mercadolibre.com/sites/MLB/search?category=q=${query}&${categoryId}`;
  } else if (categoryId) {
    apiURL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  } else {
    apiURL = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  }
  let resultRequest = await fetch(apiURL);
  resultRequest = await resultRequest.json();
  return resultRequest;
}
