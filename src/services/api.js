export async function getCategories() {
  // Implemente aqui
  const requestApi = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await requestApi.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  let requestApi;
  let categories;
  if (categoryId === undefined) {
    requestApi = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    categories = await requestApi.json();
    return categories;
  }
  if (query === undefined) {
    requestApi = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
    categories = await requestApi.json();
    return categories;
  }

  requestApi = await fetch('https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY');
  categories = await requestApi.json();
  return categories;
}
