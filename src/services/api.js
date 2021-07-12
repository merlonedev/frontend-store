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

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const CATEGORY_AND_QUERY_URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`;
  try {
    const response = await fetch(CATEGORY_AND_QUERY_URL);
    const searchProducts = await response.json();
    return searchProducts;
  } catch (error) {
    console.log(error);
  }
}
