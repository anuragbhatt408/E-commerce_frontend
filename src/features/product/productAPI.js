// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    // We will not hard-code things here
    const response = await fetch(`http://localhost:8082/products`);
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductByFilter(filter, sort, pagination) {
  // filter = {"category":["smartphone","laptops"]}
  // sort = {_sort:"price",_order="desc"}
  // // pagination = {_page:1,_limit=10}

  // TODO : on server we will support multi values in filter
  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
  }
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }

  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}`;
  }

  return new Promise(async (resolve) => {
    // We will not hard-code things here
    const response = await fetch(
      `http://localhost:8082/products?${queryString}`
    );
    const data = await response.json();
    const totalItems = await response.headers.get("X-Total-Count");
    resolve({ data: { products: data, totalItems: +totalItems } });
  });
}

export const fetchCategories = () => {
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8082/categories`);
    const data = await response.json();
    resolve({ data });
  });
};

export const fetchBrands = () => {
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8082/brands`);
    const data = await response.json();
    resolve({ data });
  });
};
