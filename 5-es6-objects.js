// Object Property Shorthand

const name = 'Andrew';

const userAge = 27;

const user = {
  name,
  age: userAge,
  location: 'Philadelphia'
};

console.log(user);

// Object Destructuring

const product = {
  label: 'Red Notebook',
  price: 3,
  stock: 201,
  salePrice: undefined
};

// const label = product.label;
// const stock = product.stock;

// const { label: productLabel, price, stock, salePrice = true } = product;

// console.log(productLabel);
// console.log(price);
// console.log(salePrice);

const transaction = (type, { label, price, stock }) => {
  console.log(label, price, stock);
};

transaction('order', product);
