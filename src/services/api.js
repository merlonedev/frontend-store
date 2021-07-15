export async function getCategories() {
  const apiCategorias = 'https://api.mercadolibre.com/sites/MLB/categories';
  const returnCategory = await fetch(apiCategorias);
  const dataCat = await returnCategory.json();
  return dataCat;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const apiProducts = 'https://api.mercadolibre.com/sites/MLB/search?category=';
  const returnProducts = await fetch(`${apiProducts}${categoryId}&q=${query}`);
  const dataProducts = await returnProducts.json();
  return dataProducts;
}

export async function getProductsFromQuery(query) {
  const url = 'https://api.mercadolibre.com/sites/MLB/search?q=';
  const response = await fetch(`${url}${query}`);
  const data = response.json();
  return data;
}
