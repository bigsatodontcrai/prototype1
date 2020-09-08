function startDrag() {
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
}

function dropShip(board, shipname) {

    
    return () => {
        ship = document.querySelector(shipname);
        content2.append(ship);
    }
    
}

function dragover_handler(ev) {
    ev.preventDefault();
}

function dragLeave() {
    this.className = 'empty';
}

function moveOver(ev) {
    ev.preventDefault();
}

function moveEnter(ev){
    ev.preventDefault();
    this.className += ' hovered';
}

