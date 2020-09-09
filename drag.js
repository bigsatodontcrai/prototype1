function startDrag(ev) {
    ev.dataTransfer.dropEffect = "copy";
    
   
}

function dropShip(ev) {
    ev.preventDefault();
    alert("wow!");
    
    // Get the id of the target and add the moved element to the target's DOM
    const data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function dragover_handler(ev) {
    ev.preventDefault();
}

function dragLeave() {
    
}

function moveOver(ev) {
    ev.preventDefault();
}

function moveEnter(ev){
    ev.preventDefault();
    
}




