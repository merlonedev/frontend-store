const URL_CATEGORIES = 'https://api.mercadolibre.com/sites/MLB/categories';
const URL_QUERY = 'https://api.mercadolibre.com/sites/MLB/search?category=';
export async function getCategories() {
  const response = await fetch(URL_CATEGORIES);
  const categories = await response.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const response = await fetch(`${URL_QUERY}${categoryId}&q=${query}`);
  const product = await response.json();
  return product;
}
