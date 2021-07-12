export async function getCategories() {
  const api = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await api.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const api = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
  );
  const categoryAndQuery = api.json();
  return categoryAndQuery;
}
