export async function getCategories() {
  const apiURL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const fetchAPI = await fetch(apiURL);
  const jsonAPI = await fetchAPI.json();
  return jsonAPI;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const apiURL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`;
  const fetchAPI = await fetch(apiURL);
  const jsonAPI = await fetchAPI.json();
  return jsonAPI;
}

export async function getProductDescription(id) {
  const apiURL = `https://api.mercadolibre.com/items/${id}/description`;
  const fetchAPI = await fetch(apiURL);
  const jsonAPI = await fetchAPI.json();
  return jsonAPI;
}
