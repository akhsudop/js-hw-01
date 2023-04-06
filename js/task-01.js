const list = document.querySelector("#categories");
const itemList = document.querySelectorAll(".item");

console.log("Number of categories: ", list.children.length);

[...itemList].forEach((item) =>
  console.log(
    "Category name: ",
    item.firstElementChild.textContent,
    "Elements: ",
    item.lastElementChild.children.length
  )
);
