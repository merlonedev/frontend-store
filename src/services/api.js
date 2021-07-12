const URL_CATEGORIES = 'https://api.mercadolibre.com/sites/MLB/categories';

export async function getCategories() {
  const response = await fetch(URL_CATEGORIES);
  const categories = await response.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
