let inp = document.getElementById('title')
let inp2 = document.getElementById('description')
let btn = document.querySelector(".add")
let container = document.querySelector(".conatainer")


btn.addEventListener('click',()=>{
    let childDiv = document.createElement('div')
    let divTitle = document.createElement('div')
    let divDesc =document.createElement("div")
    let btn2 = document.createElement("button")
    btn2.innerText = "delete"
    container.appendChild(childDiv)
    childDiv.appendChild(divTitle).innerHTML = inp.value
childDiv.appendChild(divDesc).innerHTML =inp2.value
childDiv.appendChild(btn2)
})

