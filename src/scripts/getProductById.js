import productsData from  "../data/products.json"

const products = productsData

export function findById(id) {
    const numericId = Number(id);
    const element = products.find((e) => Number(e.id) === numericId);

  return element || null;
}






