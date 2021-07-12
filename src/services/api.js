export async function getCategories() {
  const categories_api = "https://api.mercadolibre.com/sites/MLB/categories";

  return fetch(categories_api)
    .then((result) => result.json())
    .then((response) => response);
  }

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
