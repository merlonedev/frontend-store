const apiCategorias = 'https://api.mercadolibre.com/sites/MLB/categories';
const apiProducts = 'https://api.mercadolibre.com/sites/MLB/search?category=';

export async function getCategories() {
  const returnCategory = await fetch(apiCategorias);
  const dataCat = await returnCategory.json();
  return dataCat;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const returnProducts = await fetch(`${apiProducts}${categoryId}&q=${query}`);
  const dataProducts = await returnProducts.json();
  return dataProducts;
}
