export async function getCategories() {
  const api = await fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((response) => response.json())
    .then((data) => data);
  return api;
}

export async function getProductsFromCategoryAndQuery(categoryId = '', query = '') {
  const categorySearch = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then((response) => response.json())
    .then((data) => data);
  return categorySearch;
}
