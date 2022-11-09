// Your code here
document.querySelector("#addToDo").addEventListener('keydown', (event) => {

    if(event.isComposing || event.keyCode === 13){
        alert("funciona")
        let element = document.createElement("li")
        element.innerHTML = '<span><i class="fa fa-trash"></i></span> ' + event.target.value
        element.querySelector("span").addEventListener("click", deleteItem)
        document.querySelector("ul").appendChild(element)
        event.target.value = ""
    }
}
);

let spans = document.querySelector("ul").getElementsByTagName("span")
for(let i=0; i<spans.length; i++){
    spans.item(i).addEventListener("click",deleteItem)
}

function deleteItem(event){
    let span = event.target
    document.querySelector("ul").removeChild(span.parentElement.parentElement)
}