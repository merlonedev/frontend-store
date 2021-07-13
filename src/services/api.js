const url = 'https://api.mercadolibre.com/sites/MLB/categories';
const urlCategorySelect = 'https://api.mercadolibre.com/sites/MLB/search?category=';
// const itemUrl = 'https://api.mercadolibre.com/items/';

export async function getCategories() {
  const response = await fetch(url);
  const categories = await response.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const response = await fetch(`${urlCategorySelect}${categoryId}&q=${query}`);
  const products = await response.json();
  return products;
}

// export async function getItemDetails(itemId) {
//   const response = await fetch(`${itemUrl + itemId}`);
//   const product = await response.json();
//   return product;
// }
