// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    // We will not hard-code things here
    const response = await fetch(`http://localhost:8082/products`);
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductByFilter(filter) {
  let queryString = "";
  for (let key in filter) {
    queryString += `${key}=${filter[key]}&`;
  }
  return new Promise(async (resolve) => {
    // We will not hard-code things here
    const response = await fetch(
      `http://localhost:8082/products?${queryString}`
    );
    const data = await response.json();
    resolve({ data });
  });
}
