export function categoryHandler(productList, categoryName) {
  if (categoryName === "chinese") {
    return productList.filter((data) => data.category === categoryName);
  }
  if (categoryName === "biryani") {
    return productList.filter((data) => data.category === categoryName);
  }
  if (categoryName === "cakes") {
    return productList.filter((data) => data.category === categoryName);
  }
  return productList;
}
