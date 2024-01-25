let btn = document.querySelector(".add");
let container = document.querySelector(".conatainer");

let globalid = 1;
function createChild(title, description, id) {
  let childDiv = document.createElement("div");

  let divTitle = document.createElement("div");

  let divDesc = document.createElement("div");

  let btn2 = document.createElement("button");

  btn2.innerText = "mark as done";

  container.appendChild(childDiv);

  childDiv.appendChild(divTitle).innerHTML = title.value;

  childDiv.appendChild(divDesc).innerHTML = description.value;

  childDiv.appendChild(btn2);
  childDiv.setAttribute("id", id);

  btn2.addEventListener("click", () => {
    btn2.innerText = "done";
  });
  return childDiv;
}
btn.addEventListener("click", () => {
  let inp = document.getElementById("title");
  let inp2 = document.getElementById("description");

  container.appendChild(createChild(inp, inp2, globalid++));
});
