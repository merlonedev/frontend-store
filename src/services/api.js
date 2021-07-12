// Cria uma função onde traz as categorias do mercadolibre
export async function getCategories() {
  const apiCategories = 'https://api.mercadolibre.com/sites/MLB/categories';

  return fetch(apiCategories)
    .then((result) => result.json())
    .then((response) => response);
}
// Retorna uma promise das categorias do mercadolibre

// Cria uma função onde traz as categorias pelo id e query passados.
export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const apiCategoriesandQuery = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;

  return fetch(apiCategoriesandQuery)
    .then((result) => result.json())
    .then((response) => response);
}
// Retorna uma promise das categorias de acordo com o id e query passados.
