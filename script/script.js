function populateList(myShoppingList) {
  //get access to the ul element
  const ulElement = document.querySelector("ul.shopping");
  console.log(ulElement);
  // get myShoppingList array
  // add an li under the ul element with text equal to each item of myList
  for (let item of myShoppingList) {
    //make a new li document.createElement
    //update the text of the new li
    // append the new li to the ul element
    const newLi = document.createElement("li");
    newLi.textContent = item;
    ulElement.appendChild(newLi);
  }
}
let myShoppingList = ["bread", "cheese", "Greenpepper"];
populateList(myShoppingList);
