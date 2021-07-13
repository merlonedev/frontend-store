export async function getCategories() {
  const apiUrl = 'https://api.mercadolibre.com/sites/MLB/categories';
  try {
    const response = await fetch(apiUrl);
    const categorie = await response.json();
    return categorie;
  } catch (error) {
    return error;
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let apiUrl = '';
  if (categoryId && query) {
    apiUrl = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  } else {
    apiUrl = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  }
  try {
    const response = await fetch(apiUrl);
    const categorie = await response.json();
    return categorie;
  } catch (error) {
    return error;
  }
}
