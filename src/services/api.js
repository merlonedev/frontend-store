export async function getCategories() {
  const CATEGORIES_URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  try {
    const response = await fetch(CATEGORIES_URL);
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
