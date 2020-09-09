function setup(parent, mark) {
    let elem;

    for (let i = 0; i < 81; i++) {
        let circ;
        elem = document.createElement('div');
        elem.className = 'square';
        elem.setAttribute('ondragover', 'event.preventDefault()');
        parent.append(elem);
        circ = document.createElement('span');
        circ.className = 'circle';
        elem.addEventListener('click', mark(elem));
        elem.addEventListener('dblclick', destroy(elem));
        elem.append(circ);
    }
}

function destroy(elem) {
    return () => {
        elem.removeChild(elem.firstChild);
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