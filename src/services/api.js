const URL_CATEG = 'https://api.mercadolibre.com/sites/MLB/categories';
const URL_PRODS = 'https://api.mercadolibre.com/sites/MLB/search?category=';

export async function getCategories() {
  const res = await fetch(URL_CATEG);
  const cat = await res.json();
  return cat;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const response = await fetch(`${URL_PRODS}${categoryId}${query}`);
  const product = await response.json();
  return product;
}
