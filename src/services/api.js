const URL_CATEG = 'https://api.mercadolibre.com/sites/MLB/categories';
const URL_QUERY = 'https://api.mercadolibre.com/sites/MLB/search?q=$';
const URL_PRODS = 'https://api.mercadolibre.com/sites/MLB/search?category=$';

export async function getCategories() {
  const res = await fetch(URL_CATEG);
  const cat = await res.json();
  return cat;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let response;
  if (!categoryId) {
    response = await fetch(`${URL_QUERY}${query}`);
  } else if (!query) {
    response = await fetch(`${URL_PRODS}${categoryId}`);
  } else {
    response = await fetch(`${URL_PRODS}${categoryId}&q=${query}`);
  }
  let products = await response.json();
  products = products.results;
  return products;
}
