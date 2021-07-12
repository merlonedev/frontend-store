export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const item = await response.json();
  return item;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (!categoryId) {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const item = await response.json();
    return item;
  }
  if (!query) {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
    const item = await response.json();
    return item;
  }
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`);
  const item = await response.json();
  return item;
}
