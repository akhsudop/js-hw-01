const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let myList = document.querySelector("#ingredients");

for (let i in ingredients) {
  const line = document.createElement("li");
  line.textContent = ingredients[i];
  myList.append(line);
}

const markup = ingredients.map((ing) => `<li>${ing}</li>`).join("");
myList.innerHTML = markup;
