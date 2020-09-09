function markSquare(elem) {
    //return () => {
        if (elem.firstChild.className == 'hit') {
            obj = document.createElement('span');
            obj.className = 'miss';
            elem.removeChild(elem.firstChild);
            let obj;
            elem.append(obj);
        }
        else {
            alert("!");
            elem.removeChild(elem.firstChild);
            let obj;
            obj = document.createElement('div');
            obj.className = 'hit';
            elem.append(obj);
        }
    //}
}

function markShip(elem) {
    return () => {
        if (elem.firstChild.className == 'hit') {
            obj = document.createElement('span');
            obj.className = 'miss';
            elem.removeChild(elem.firstChild);
            let obj;
            elem.append(obj);
        }
        else {
            alert("!");
            elem.removeChild(elem.firstChild);
            let obj;
            obj = document.createElement('div');
            obj.className = 'hit';
            elem.append(obj);
        }
    }
}