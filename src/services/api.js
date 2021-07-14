export async function getCategories() {
  try {
    let result = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    result = await result.json();
    return result;
  } catch {
    console.log('ERROR: could not fetch from api.mercadolibre');
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    let result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
    result = await result.json();
    return result;
  } catch {
    console.log('ERROR: could not fetch from api.mercadolibre');
  }
}
