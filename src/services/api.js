export async function getCategories() {
  // Implemente aqui
  const requestApi = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  return requestApi.results;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  let requestApi;
  if (categoryId === undefined) {
    requestApi = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=$QUERY');
    return requestApi.results;
  }
  if (query === undefined) {
    requestApi = await fetch('https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID');
    return requestApi.results;
  }

  requestApi = await fetch('https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY');
  return requestApi.results;
}
