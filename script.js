let items = [];

function onDelete(index) {
  items = items.filter(function (item, i) {
    // keep the elements that do not equal to this index that I passing (which index)
    return i != index;
  });
  display();
}
function display() {
  const arrayList = document.getElementById("arrayList");
  arrayList.innerHTML = "";
  const ul = document.createElement("ul");
  items.forEach(function (item, i) {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
    // create delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.classList = "btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      onDelete(i);
    });
    li.appendChild(deleteBtn);
  });

  arrayList.appendChild(ul);
}

function addItem() {
  // get the input value from the input
  let inputValue = document.getElementById("inputValue").value;
  if (inputValue !== "") {
    // adding the value of the input to the items array
    items.push(inputValue);
    display();
  }
}
window.onload = display;
