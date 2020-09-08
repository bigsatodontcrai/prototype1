function markSquare(elem) {
    return () => {
        if ((elem.innerText == '') || (elem.innerText == 'O')) {
            elem.innerText = 'X';

        } else {
            elem.innerText = 'O';

        }

    }
}

function markShip(elem) {
    return () => {
        elem.innerText = 'X';
    }
}