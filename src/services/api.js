// Cria uma função onde traz as categorias do mercadolibre
export async function getCategories() {
  const apiCategories = 'https://api.mercadolibre.com/sites/MLB/categories';

  const result = await fetch(apiCategories);
  const response = await result.json();
  return response;
}
// Retorna uma promise das categorias do mercadolibre

// Cria uma função onde traz as categorias pelo id e query passados.
export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const apiCategoriesandQuery = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;

  const result = await fetch(apiCategoriesandQuery);
  const response = await result.json();
  return response;
}
// Retorna uma promise das categorias de acordo com o id e query passados
