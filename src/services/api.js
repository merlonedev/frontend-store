export async function getCategories() {
  const URLCategories = 'https://api.mercadolibre.com/sites/MLB/categories';
  const fetchCategories = await fetch(URLCategories);
  const fetchCategoriesJson = await fetchCategories.json();
  return fetchCategoriesJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const URLMLB = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const fetchProduct = await fetch(URLMLB);
  const fetchProductJson = await fetchProduct.json();
  return fetchProductJson;
}
