// Cria uma função onde traz as categorias do mercadolibre
export async function getCategories() {
  const apiCategories = 'https://api.mercadolibre.com/sites/MLB/categories';

  return fetch(apiCategories)
    .then((result) => result.json())
    .then((response) => response);
}
// Retorna uma promise das categorias do mercadolibre

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
