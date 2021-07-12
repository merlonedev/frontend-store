export async function getCategories() {
  // Implemente aqui
  const apiUrl = 'https://api.mercadolibre.com/sites/MLB/categories';
  try {
    const response = await fetch(apiUrl);
    const categorie = await response.json();
    return categorie;
  } catch (error) {
    return error;
  }
}

getCategories();

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const apiUrl = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch(apiUrl);
  const categorie = await response.json();
  return categorie;
}
