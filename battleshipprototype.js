const pSquares = [];
const oSquares = [];

document.addEventListener('DOMContentLoaded', () => {
    let content = document.getElementById('content');
    let ocean = document.getElementById('ocean');
    let base = document.getElementById('base');
    setup(content, markSquare, oSquares);
    setup(ocean, markSquare, pSquares);
    let resetButton = document.querySelector('.reset');
    
    resetButton.addEventListener('click', () => {
        breakdown(content);
        setup(content, markSquare, oSquares);
        breakdown(ocean);
        setup(ocean, markShip, pSquares);
    });
});

