function createShip(parent, number) {
    let ship;

    elem = document.createElement('div');
    elem.setAttribute('draggable', 'true');
    elem.className = 'ship' + number;
    shipName = elem.className;
    elem.addEventListener('dragstart', startDrag);
    elem.addEventListener('drop', dropShip(parent, shipName));
    /*elem.addEventListener('dragenter', moveEnter());
    elem.addEventListener('dragover', moveOver());
    elem.addEventListener('dragleave', moveLeave());
    elem.addEventListener('dropend', moveDropEnd());*/
    parent.append(elem);

}

function allShips(parent, number) {
    for (let i = 0; i < number; i++) {
        createShip(parent, i + 1);
    }
}