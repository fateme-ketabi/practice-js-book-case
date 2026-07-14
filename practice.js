const dash = () => {
  console.log("-".repeat(70));
};
dash();

const book = [];

const addbook = (item) => {
  book.push(item);
};

addbook({
  title: "move on",
  page: 325,
  price: 100,
  year: 1925,
  stock: true,
});

addbook({
  title: "self-love",
  page: 340,
  price: 550,
  year: 1935,
  stock: true,
});

addbook({
  title: "tree-bloods",
  page: 185,
  price: 250,
  year: 1956,
  stock: false,
});

addbook({
  title: "the-end",
  page: 455,
  price: 550,
  year: 1964,
  stock: true,
});

addbook({
  title: "die",
  page: 155,
  price: 717,
  year: 1840,
  stock: false,
});

const showItem = () => {
  book.forEach((item) => {
    console.log(item);
  });
};

showItem();

dash();

const discountBooks = () => {
  const discount = book.map((item) => {
    return {
      ...item,
      price: item.price * 0.9,
    };
  });
  console.log(discount);
};

discountBooks();

dash();

const filterbooks = () => {
  const filterBook = book.filter((item) => item.price < 500);
  console.log(filterBook);
};

filterbooks();

dash();

const findbook = () => {
  const find = book.find((title) => title.title === "self-love");
  console.log(find);
};

findbook();

dash();

const removeLastbook = () => {
  book.pop();
  console.log(book);
};

removeLastbook();

dash();

const suggestedBook = () => {
  const suggest = book.filter((item) => item.price < 500 && item.stock);
  console.log(suggest);
};
suggestedBook();
