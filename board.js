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
        pSquares = [];
        oSquares = [];
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
    
    //console.log('dropping...');
    //console.log(draggedShip.className);
    let shipNameWithLastId = draggedShip.lastElementChild.id;
    //console.log(shipNameWithLastId);
    let shipClass;
    shipClass = shipNameWithLastId.slice(0, -2);
    //console.log(shipClass);
    let lastShipIndex = parseInt(shipNameWithLastId.substr(-1));
    //console.log(lastShipIndex);
    //console.log(this);
    //console.log(this.dataset.id);
    let shipLastId = lastShipIndex + parseInt(this.dataset.id);
    //console.log(shipLastId);
    //console.log(shipNameWithLastId);
    let isTaken = pSquares[parseInt(this.dataset.id)].classList.contains('taken');
    //console.log(isTaken);
    let selectedShipIndex = parseInt(shipById.substr(-1));
    shipLastId = shipLastId - selectedShipIndex;
    //console.log(shipLastId);
    //console.log(pSquares[1].className);

    isTaken = checkTaken(this, selectedShipIndex);
    console.log(isTaken);

    if(!(isTaken)) {
        for (let i = 0; i < draggedShipLength; i++) {
            
            if(!isTaken) {
                pSquares[i + parseInt(this.dataset.id) - selectedShipIndex].classList.add('taken', shipClass);
            }
            else {
                isTaken = true;
            }
            
        }
    }
    if(!isTaken) {
        base.removeChild(draggedShip);
    }
    
    
}

function checkTaken(elem, pointerIndex) {
    let complete = false;
    let a = pSquares[parseInt(elem.dataset.id) - pointerIndex].classList.contains('taken');
    let b = pSquares[parseInt(elem.dataset.id) - pointerIndex + 1].classList.contains('taken');
    let c = pSquares[parseInt(elem.dataset.id) - pointerIndex + 2].classList.contains('taken');
    let d = pSquares[parseInt(elem.dataset.id) - pointerIndex + 3].classList.contains('taken');
    let e = pSquares[parseInt(elem.dataset.id) - pointerIndex + 4].classList.contains('taken');
    switch (draggedShipLength) {
        case 1:
            complete = a;
            break;
        case 2:
            complete = (a || b);
            break;
        case 3:
            complete = (a || b || c);
            break;
        case 4:
            complete = (a || b || c || d);
            break;
        case 5:
            complete = (a || b || c || d);
            break;
    }
    return complete;
}

function setupShips(parent) {
    let container;
    for (let i = 1; i < 6; i++) {
        
        container = document.createElement('div');
        container.className = 'ship';
        container.classList.add('ship' + i + '-container');
        container.setAttribute('draggable', 'true');
        parent.append(container);
        for (let j = 0; j < i; j++) {
            let circ;
            let piece;
            piece = document.createElement('div');
            piece.id = 'ship' + i + '-' + j;
            container.append(piece);
            circ = document.createElement('span');
            circ.id = 'circ';
            piece.append(circ);

        }
    }
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
