const list = document.getElementById("list");
const input = document.getElementById("taskInput");

list.addEventListener("change", function(e){
    if (e.target.type === "checkbox"){
        e.target.parentElement.classList.toggle("done");
    }
});

list.addEventListener("click", function(e){
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
    }
});

function addItem(){
    const text = input.value.trim();
    if(!text){
        return;
    }
    const item = document.createElement("div");
    item.className = "item";

    item.innerHTML =`
        <input type = "checkbox">
        <span class = "text">${text}</span>
        <span class = "delete">🗑</span>
    `;

    list.appendChild(item);
    input.value = "";
}

input.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addItem();
    }
})