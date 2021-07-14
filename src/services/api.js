export async function getCategories() {
  const apiCategorias = 'https://api.mercadolibre.com/sites/MLB/categories';
  const returnCategory = await fetch(apiCategorias);
  console.log(returnCategory);
  const dataCat = await returnCategory.json();
  console.log(dataCat);
  return dataCat;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const apiProducts = 'https://api.mercadolibre.com/sites/MLB/search?category=';
  const returnProducts = await fetch(`${apiProducts}${categoryId}&q=${query}`);
  const dataProducts = await returnProducts.json();
  return dataProducts;
}
