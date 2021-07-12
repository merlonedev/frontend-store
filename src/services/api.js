export async function getCategories() {
  const api = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await api.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let URL;
  if (!categoryId) {
    URL = `https://api.mercadolibre.com/sites/MLB/search?category=${''}&q=${query}`;
  } else if (categoryId) {
    URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  }
  const response = await fetch(URL);
  const resolved = await response.json();
  return resolved;
}
