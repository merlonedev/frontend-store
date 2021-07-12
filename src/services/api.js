const url = 'https://api.mercadolibre.com/sites/MLB/categories';
const urlCategorySelect = 'https://api.mercadolibre.com/sites/MLB/search?category=';

export async function getCategories() {
  const response = await fetch(url);
  const categories = await response.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const response = await fetch(`${urlCategorySelect}${categoryId}_ID&q=${query}`);
  const products = await response.json();
  return products;
}
