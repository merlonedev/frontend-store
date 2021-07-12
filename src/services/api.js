const URL_CATEG = 'https://api.mercadolibre.com/sites/MLB/categories';
const URL_PRODS = 'https://api.mercadolibre.com/sites/MLB/search?category=';

export async function getCategories() {
  const res = await fetch(URL_CATEG);
  const cat = await res.json();
  // console.log(cat);
  return cat;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const res = await fetch(`${URL_PRODS}${categoryId}`);
  const prods = await res.json();
  const results = await prods.results;
  const resposta = await results.filter((prod) => prod.id === query);
  // console.log(resposta[0].title);
  return resposta[0].title;
}
