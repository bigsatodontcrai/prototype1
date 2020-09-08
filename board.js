function setup(parent, mark) {
    let elem;

    for (let i = 0; i < 81; i++) {
        elem = document.createElement('div');
        elem.className = 'square';
        elem.addEventListener('click', mark(elem));
        elem.addEventListener('dblclick', destroy(elem));
        elem.innerText = '';
        parent.append(elem);
    }
}


function destroy(elem) {
    return () => {
        elem.innerText = '';
    }
}

function breakdown(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}