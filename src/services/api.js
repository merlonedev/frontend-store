export async function getCategories() {
  const URLCategories = 'https://api.mercadolibre.com/sites/MLB/categories';
  const fetchCategories = await fetch(URLCategories);
  const fetchCategoriesJson = await fetchCategories.json();
  console.log(fetchCategoriesJson)
  return fetchCategoriesJson;
}

export async function getProductsFromCategoryAndQuery(query) {
  const URLMLB = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const fetchProduct = await fetch(URLMLB);
  const fetchProductJson = await fetchProduct.json();
  console.log('teste',fetchProductJson);
  return fetchProductJson;
}

// export async function getProductsFromCategoryAndQuery(categoryId, query) {
//   const URLMLB = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
//   const fetchProduct = await fetch(URLMLB);
//   const fetchProductJson = await fetchProduct.json();
//   console.log('teste',fetchProductJson);
//   return fetchProductJson;
// }
