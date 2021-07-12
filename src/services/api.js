export async function getCategories() {
  const END_POINT = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(END_POINT);
  const json = await response.json();
  return json;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const END_POINT = `https://api.mercadolibre.com/sites/MLB/search?category=$${categoryId}_ID&q=$${query}`;
  const response = await fetch(END_POINT);
  const json = await response.json();
  console.log(json);
  return json;
}
