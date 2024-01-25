function createChild(title, description, id) {
    let childDiv = document.createElement("div");
  
    let divTitle = document.createElement("div");
  
    let divDesc = document.createElement("div");
  
    let btn2 = document.createElement("button");
  
    btn2.innerText = "mark as done";
  
    childDiv.appendChild(divTitle);
    divTitle.textContent = title;
  
    childDiv.appendChild(divDesc);
    divDesc.textContent = description;
  
    childDiv.appendChild(btn2);
    childDiv.setAttribute("id", id);
  
    btn2.addEventListener("click", () => {
      btn2.innerText = "done";
    });
    return childDiv;
  }
  
  function updateDomAccToState(state) {
    let container = document.querySelector(".container");
    container.innerHTML = '';
    for (let i = 0; i < state.length; i++) {
      const child = createChild(state[i].title, state[i].description, state[i].id)
      container.appendChild(child);
    }
  }

  window.setInterval(async ()=>{
    const res = await fetch("https://sum-server.100xdevs.com/todos")

    const json = await res.json();
    updateDomAccToState(json.todos)
  },5000)
  
//   updateDomAccToState([{
//     title: "go to gym",
//     description: "go to gym from 2494",
//     id: 1
//   },

//   {
//     title: "go to gym",
//     description: "go to gym from 2494",
//     id: 1
//   }]);
;
  