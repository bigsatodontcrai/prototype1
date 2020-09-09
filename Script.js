

function markSquare(element) {

    return () => 
    {
        if (element.firstChild.className == 'hitit') {
            
            let miss;
            miss = document.createElement('span');
            miss.className = 'missme';
            element.removeChild(element.firstChild);
            element.append(miss);
            
        }
        else {
            let hit;
            hit = document.createElement('span');
            hit.className = 'hitit';
            element.removeChild(element.firstChild);
            element.append(hit);
            
        }
    }
    
}

function destroy(element) {
    return () => {
        element.removeChild(element.firstChild);
        circ = document.createElement('span');
        circ.className = 'circle';
        element.append(circ);

    }
}

function markShip(elem) {
    return () => {
        if (element.firstChild.className == 'hitit') {

            let miss;
            miss = document.createElement('span');
            miss.className = 'missme';
            element.removeChild(element.firstChild);
            element.append(miss);

        }
        else {
            let hit;
            hit = document.createElement('span');
            hit.className = 'hitit';
            element.removeChild(element.firstChild);
            element.append(hit);

        }
    }
}

function rotate(element) {

}

function gameCheck() {

}

function sinking() {

}

function setShipNumber() {
    
}