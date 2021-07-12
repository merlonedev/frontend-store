export async function getCategories() {
  // Implemente aqui
  let categories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  categories = categories.json();
  console.log(categories);
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  let products = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  products = products.json();
  return products;
}
