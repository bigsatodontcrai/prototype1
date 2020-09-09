/*function createShip(parent, number) {
    let ship;

    elem = document.createElement('div');
    elem.setAttribute('draggable', 'true');
    elem.setAttribute('ondragstart', 'startDrag(event)');
    elem.className = 'ship' + number;
    shipName = elem.className;
    //elem.addEventListener('dragstart', startDrag);
    //elem.addEventListener('drop', dropShip);
    elem.addEventListener('dragenter', moveEnter);
    elem.addEventListener('dragover', moveOver);
    elem.addEventListener('dragleave', dragLeave);
    
    parent.append(elem);

}

function allShips(parent, number) {
    for (let i = 0; i < number; i++) {
        createShip(parent, i + 1);
    }
}*/