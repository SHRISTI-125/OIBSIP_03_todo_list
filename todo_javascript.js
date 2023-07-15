const input = document.getElementById("input-box");
const list_container = document.getElementById("list");

function add_task(){
    if(input.value===''){
        alert("Write here")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list_container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);
    }
    input.value = "";
    save();
}


var list = document.querySelector('list');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function save(){
    localStorage.setItem("data",list_container.innerHTML);
}

function display_task(){
    list_container.innerHTML = localStorage.getItem("data");
}

display_task();