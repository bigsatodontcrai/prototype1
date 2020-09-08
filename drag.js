function startDrag() {
    heldShip = this;
    heldShipLength = this.childNodes.length;
}

function dropShip(board, shipname) {

    ship = document.getElementById(shipname);
    return () => {
        board.appendChild(ship);
    }
}

function dragover_handler(ev) {
    ev.preventDefault();
}