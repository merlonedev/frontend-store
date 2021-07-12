export async function getCategories() {
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const categories = await fetch(URL);
  const response = await categories.json();
  return response;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const products = await fetch(URL);
  const response = products.json();
  return response;
}
