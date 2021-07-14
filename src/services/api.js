const URL_CATEG = 'https://api.mercadolibre.com/sites/MLB/categories';
const URL_QUERY = 'https://api.mercadolibre.com/sites/MLB/search?q=$';
const URL_PRODS = 'https://api.mercadolibre.com/sites/MLB/search?category=$';

export async function getCategories() {
  const res = await fetch(URL_CATEG);
  const cat = await res.json();
  return cat;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let resHead;
  if (!categoryId && query) {
    resHead = await fetch(`${URL_QUERY}${query}`);
  } else if (categoryId && !query) {
    resHead = await fetch(`${URL_PRODS}${categoryId}`);
  } else {
    resHead = await fetch(`${URL_PRODS}${categoryId}&q=${query}`);
  }
  const response = await resHead.json();
  return response;
}
