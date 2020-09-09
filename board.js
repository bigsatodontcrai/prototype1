let shipById;
let draggedShip;
let draggedShipLength;
const ships = document.querySelectorAll('.ship');

ships.forEach(ship => ship.addEventListener('mousedown', (event) => {
    shipById = event.target.id;
    console.log(shipById);
}))

ships.forEach(ship => ship.addEventListener('dragstart', startDrag));

ships.forEach(ship => ship.setAttribute('draggable', 'true'));

function setup(parent, mark, Squares) {
    let elem;

    for (let i = 0; i < 81; i++) {
        let circ;
        elem = document.createElement('div');
        elem.className = 'square';
        elem.setAttribute('ondragover', 'event.preventDefault()');
        elem.addEventListener('click', mark(elem));
        elem.addEventListener('dblclick', destroy(elem));
        elem.addEventListener('dragstart', startDrag);
        elem.addEventListener('dragover', moveOver);
        elem.addEventListener('dragenter', moveEnter);
        elem.addEventListener('drop', dragDrop);
        
        parent.append(elem);
        elem.dataset.id = i;
        Squares.push(elem);
        circ = document.createElement('span');
        circ.className = 'circle';
        elem.append(circ);
        
    }
    
}

function breakdown(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function startDrag(ev) {
    console.log('starting drag');
    draggedShip = this;
    draggedShipLength = this.childElementCount;
    ev.dataTransfer.dropEffect = "move";
    console.log(draggedShip.className);
    console.log(draggedShipLength);
    console.log('dragging...');
}

function dragDrop() {
    
    console.log('dropping...');
    console.log(draggedShip.className);
    let shipNameWithLastId = draggedShip.lastElementChild.id;
    console.log(shipNameWithLastId);
    let shipClass;
    shipClass = shipNameWithLastId.slice(0, -2);
    console.log(shipClass);
    let lastShipIndex = parseInt(shipNameWithLastId.substr(-1));
    console.log(lastShipIndex);
    console.log(this);
    console.log(this.dataset.id);
    let shipLastId = lastShipIndex + parseInt(this.dataset.id);
    console.log(shipLastId);
    console.log(shipNameWithLastId);
    let selectedShipIndex = parseInt(shipById.substr(-1));
    shipLastId = shipLastId - selectedShipIndex;
    console.log(shipLastId);
    //console.log(pSquares[1].className);
    for (let i = 0; i < draggedShipLength; i++) {
        pSquares[i + parseInt(this.dataset.id) - selectedShipIndex].classList.add('taken', shipClass);
    }

    base.removeChild(draggedShip);
}

function dragover_handler(ev) {
    ev.preventDefault();
}

function dragLeave() {

}

function moveOver(ev) {
    ev.preventDefault();
}

function moveEnter(ev) {
    ev.preventDefault();

}
