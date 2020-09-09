let width = 9;

const shipArray = [
    {
        name: 'ship1',
        directions: [
            [0, 0],
            [0, 0]
        ]
    },
    {
        name: 'ship2',
        directions: [
            [0, 1],
            [0, width]
        ]
    },
    {
        name: 'ship3',
        directions: [
            [0, 1, 2],
            [0, width, width*2]
        ]
    },
    {
        name: 'ship4',
        directions: [
            [0, 1, 2, 3],
            [0, width, width*2, width*3]
        ]
    },
    {
        name: 'ship5',
        directions: [
            [0, 1, 2, 3, 4],
            [0, width, width * 2, width * 3, width * 4]
        ]
    }

]





/*
let ship1 = document.querySelector('ship1-container');
let ship2 = document.querySelector('ship2-container');
let ship3 = document.querySelector('ship3-container');
let ship4 = document.querySelector('ship4-container');
let ship5 = document.querySelector('ship5-container');

function allShips(bay, number) {

    createShip(ship1);
    createShip(ship2);
    createShip(ship3);
    createShip(ship4);
    createShip(ship5);
}


function createShip(ship) {
    return () => {
        for (ships in ship) {
            let circ;
            circ = document.createElement('span');
            circ.className = 'circ';
            ships.append(circ);
        }
    }
}





function createShip(parent, number) {
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